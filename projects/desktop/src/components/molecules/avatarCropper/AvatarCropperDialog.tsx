import React, { useState, useRef, ChangeEvent } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import AvatarEditor from 'react-avatar-editor'
import { Grid } from '@material-ui/core'
import { Done, Replay, Close, Publish } from '@material-ui/icons'
import downscale from 'downscale'

import { Dialog, DialogTitle, AvatarEditorContainer, Button, FileInput } from '../../'
import { ISimpleDialogProps } from '../../../interfaces/dialogs'
import { AvatarEditorSlider } from '../../atoms/common/avatarCropper/AvatarEditorSlider'
import { AVATAR_HEIGHT, AVATAR_WIDTH } from '../../../constants'

interface IOwnProps {
    setAvatar: (value: string) => void
}

type IProps = ISimpleDialogProps & IOwnProps

/**
 * AvatarCropperDialog component
 *
 * A modal which allows to select an avatar
 * @param props Component's props
 */
export const AvatarCropperDialog = ({ open, onClose, setAvatar }: IProps): JSX.Element => {
    const { t }: UseTranslationResponse = useTranslation()
    const [uploadedImage, setUploadedImage]: [string | null, Function] = useState<string | null>(
        null
    )
    const [scale, setScale]: [number, Function] = useState<number>(1)
    const [editor, setEditor]: [AvatarEditor | null, Function] = useState<AvatarEditor | null>(null)
    const imageInput = useRef<HTMLInputElement>(null)

    /**
     * Method which changes the state when
     * the slider value changes
     *
     * @param value: the scale of the image
     */
    const handleSliderChange = (...args: any): void => {
        setScale(args[1] as number)
    }

    /**
     * Method which handles increment/decrement with
     * the side buttons + & -
     *
     * @param mode increment/decrement
     */
    const changeStep = (mode: string): void => {
        if (mode === '+') {
            setScale(scale < 2 ? scale + 0.1 : 2)
        } else if (mode === '-') {
            setScale(scale > 0.1 ? scale - 0.1 : 0.1)
        }
    }

    /**
     * Method which set the chosen avatar
     */
    const onAvatarEditorSave = async (): Promise<void> => {
        if (editor) {
            const avatar: string = editor.getImage().toDataURL()
            const downscaledAvatar: string = await downscale(avatar, AVATAR_WIDTH, AVATAR_HEIGHT)
            setAvatar(downscaledAvatar)
        }
    }

    /**
     * Method which sets the uploaded image in order
     * to get the cropper
     *
     * @param event The event thrown when uploading an image
     */
    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>): void => {
        const input: HTMLInputElement = event.target
        if (input?.files && input.files[0]) {
            const reader: FileReader = new FileReader()
            reader.onload = (e: ProgressEvent<FileReader>) => {
                const result: string = e.target?.result as string
                if (
                    result.startsWith('data:image') ||
                    result.startsWith('data:application/octet-stream;base64')
                ) {
                    setUploadedImage(result)
                }
            }
            reader.readAsDataURL(input.files[0])
        }
    }

    return (
        <Dialog data-testid="avatarCropperDialog" onClose={onClose} open={open}>
            <DialogTitle>{t('dialogs.avatarCropper.title')}</DialogTitle>
            {uploadedImage ? (
                <AvatarEditorContainer>
                    <AvatarEditor
                        ref={(editor: AvatarEditor) => setEditor(editor)}
                        image={uploadedImage}
                        width={AVATAR_WIDTH}
                        height={AVATAR_HEIGHT}
                        border={25}
                        borderRadius={200}
                        color={[0, 0, 0, 0.3]}
                        scale={scale}
                        rotate={0}
                    />
                    <AvatarEditorSlider
                        value={scale}
                        onChange={handleSliderChange}
                        increment={() => changeStep('+')}
                        decrement={() => changeStep('-')}
                    />
                </AvatarEditorContainer>
            ) : (
                <FileInput
                    data-testid="imageInput"
                    ref={imageInput}
                    type="file"
                    onChange={handleFileUpload}
                />
            )}
            <Grid container>
                {uploadedImage ? (
                    <>
                        <Grid item xs>
                            <Button onClick={onAvatarEditorSave}>
                                <Done />
                            </Button>
                        </Grid>
                        <Grid item xs>
                            <Button onClick={() => setUploadedImage(null)}>
                                <Replay />
                            </Button>
                        </Grid>
                    </>
                ) : (
                    <Grid item xs>
                        <Button onClick={() => imageInput?.current?.click()}>
                            <Publish />
                        </Button>
                    </Grid>
                )}
                <Grid item xs>
                    <Button onClick={onClose}>
                        <Close />
                    </Button>
                </Grid>
            </Grid>
        </Dialog>
    )
}

import React from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { Dialog, DialogTitle, LanguageList, LanguageListItem } from '../../'
import { ISimpleDialogProps } from '../../../interfaces/dialogs'

interface ILanguageChooserDialogProps extends ISimpleDialogProps {
    setLanguage: (value: string) => void
    selectedValue: string
}

/**
 * LanguageChooserDialog component
 *
 * A modal with the different languages
 * @param props Component's props
 */
export const LanguageChooserDialog = ({
    open,
    selectedValue,
    setLanguage,
    onClose,
}: ILanguageChooserDialogProps): JSX.Element => {
    const { t, i18n }: UseTranslationResponse = useTranslation()

    // A list of the available languages
    const languages: string[] = Object.keys(i18n.options.resources ?? {})

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>{t('dialogs.languages.title')}</DialogTitle>
            <LanguageList>
                {languages.map(
                    (language: string): JSX.Element => (
                        <LanguageListItem
                            key={language}
                            data-testid={language}
                            button
                            onClick={(): void => setLanguage(language)}
                            disabled={language === selectedValue}
                        >
                            {t(`languages.${language}`)}
                        </LanguageListItem>
                    )
                )}
            </LanguageList>
        </Dialog>
    )
}

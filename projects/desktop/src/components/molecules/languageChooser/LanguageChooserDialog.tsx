import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import { useTranslation, UseTranslationResponse } from 'react-i18next'

import { LanguageDialogTitle, LanguageList, LanguageListItem } from '../../'
import { ISimpleDialogProps } from '../../../interfaces/dialogs'

interface ILanguageChooserDialogProps extends ISimpleDialogProps {
    setLanguage: (value: string) => void;
}

/**
 * LanguageChooserDialog component
 *
 * A modal with the different languages
 * @param props Component's props
 */
export const LanguageChooserDialog = ({open, selectedValue, setLanguage, onClose}: ILanguageChooserDialogProps): JSX.Element => {
    const {t, i18n}: UseTranslationResponse = useTranslation()

    // A list of the available languages
    const languages: string[] = Object.keys(i18n.options.resources ?? {})

    return (
        <Dialog onClose={onClose} open={open}>
            <LanguageDialogTitle>
                {t('dialogs.languages.title')}
            </LanguageDialogTitle>
            <LanguageList>
                {languages.map((language: string): JSX.Element => (
                    <LanguageListItem
                        key={language}
                        data-testid={language}
                        button
                        onClick={(): void => setLanguage(language)}
                        disabled={language === selectedValue}
                    >
                        {t(`languages.${language}`)}
                    </LanguageListItem>
                ))}
            </LanguageList>
        </Dialog>
    )
}

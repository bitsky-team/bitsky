import React from 'react'
import {
    Dialog,
} from '@material-ui/core'
import {useTranslation, UseTranslationResponse} from 'react-i18next'
import {LanguageDialogTitle, LanguageList, LanguageListItem} from './styles'

export const LanguageChooserDialog = ({open, selectedValue, onClose}: ISimpleDialogProps): JSX.Element => {
    const {t, i18n}: UseTranslationResponse = useTranslation()

    const languages = Object.keys(i18n.options.resources || {})

    return (
        <Dialog onClose={() => onClose('')} open={open}>
            <LanguageDialogTitle>
                {t('dialogs.languages.title')}
            </LanguageDialogTitle>
            <LanguageList>
                {languages.map(language => (
                    <LanguageListItem
                        key={language}
                        data-testid={language}
                        button
                        onClick={() => onClose(language)}
                        disabled={language === selectedValue}
                    >
                        {t(`languages.${language}`)}
                    </LanguageListItem>
                ))}
            </LanguageList>
        </Dialog>
    )
}

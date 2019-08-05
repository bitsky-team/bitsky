import React from 'react'
import {useTranslation, UseTranslationResponse} from 'react-i18next'
import {SingleFormContainer} from '../common/Containers/SingleFormContainer'
import { BigTitle } from '../common/SingleForm'
import {Box, Logo, RegisterLanguageChooser} from './styles'
import logo from '../../assets/img/logo-small.png'
import { Form as FinalForm } from 'react-final-form'
import {Form} from './form'

export const RegisterScreen = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    const getTitleContent = (): IDangerousHTMLContent => {
        return {__html: t('register.title')};
    }

    return (
        <SingleFormContainer>
            <Box>
                <Logo src={logo} alt='Bitsky' />
                <RegisterLanguageChooser />
                <BigTitle dangerouslySetInnerHTML={getTitleContent()} />
                <FinalForm
                    onSubmit={values => console.log(values)}
                    initialValues={{ termsOfUse: false }}
                    render={({handleSubmit}) => <Form handleSubmit={handleSubmit} />}
                />
            </Box>
        </SingleFormContainer>
    )
}

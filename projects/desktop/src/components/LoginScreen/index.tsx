import React from 'react'
import {BigTitle, LoginLanguageChooser, Logo} from './styles'
import { Container, LeftSide, RightSide } from './parts'
import { Form as FinalForm } from 'react-final-form'
import { Form } from './form'
import {useTranslation, UseTranslationResponse} from 'react-i18next'
import logo from '../../assets/img/logo-small.png'

export const LoginScreen = (): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()

    const getTitleContent = (): IDangerousHTMLContent => {
        return {__html: t('login.title')};
    }
    
    return (
        <Container>
            <LeftSide>
                <Logo src={logo} />
                <LoginLanguageChooser />
                <BigTitle dangerouslySetInnerHTML={getTitleContent()} />

                <FinalForm
                    onSubmit={values => console.log(values)}
                    initialValues={{ remember: false }}
                    render={({handleSubmit}) => <Form handleSubmit={handleSubmit} />}
                />
            </LeftSide>
            <RightSide>
                <br/>
            </RightSide>
        </Container>
    )
}

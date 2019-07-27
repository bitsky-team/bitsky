import React from 'react'
import {BigTitle, LoginLanguageChooser} from './styles'
import { Container, LeftSide, RightSide } from './parts'
import { Form as FinalForm } from 'react-final-form'
import { Form } from './form'
import { useTranslation } from 'react-i18next'

export const LoginScreen = (): JSX.Element => {
    const [t] = useTranslation()

    const getTitleContent = (): {__html: string} => {
        return {__html: t('login.title')};
    }

    return (
        <Container>
            <LeftSide>
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

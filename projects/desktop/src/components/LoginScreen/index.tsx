import React from 'react'
import {Box, LoginLanguageChooser, Logo} from './styles'
import { SingleFormContainer } from '../common/Containers/SingleFormContainer'
import { BigTitle } from '../common/SingleForm'
import { LeftSide, RightSide } from './parts'
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
        <SingleFormContainer>
            <Box>
                <LeftSide>
                    <Logo src={logo} alt='Bitsky' />
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
            </Box>
        </SingleFormContainer>
    )
}

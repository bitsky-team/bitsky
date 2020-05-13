import React, { useContext, useState } from 'react'
import { useTranslation, UseTranslationResponse } from 'react-i18next'
import { ThemeContext } from 'styled-components'
import { Form as FinalForm, AnyObject } from 'react-final-form'
import axios from 'axios'
import { connect } from 'react-redux'
import { FORM_ERROR } from 'final-form'
// import { useHistory } from 'react-router-dom'

import { getLogo } from '../helpers/logo'
import { error } from '../helpers/logger'
import { ITheme } from '../interfaces/theme'
import { IDangerousHTMLContent } from '../interfaces/generics'
import { IFinalFormRenderProps } from '../interfaces/forms'
import { IReduxState } from '../interfaces/redux'
import { ISession } from '../interfaces/session'
import { serverURL, DEFAULT_AVATAR } from '../constants'
import {
    SingleFormContainer,
    BigTitle,
    SignUpBox,
    Logo,
    SFLanguageChooser,
    AvatarCropper,
    OnboardingForm,
} from '../components'

interface IForm {
    avatar: string;
    username: string;
    birthdate: string;
    description: string;
}

interface IStoreProps {
    session?: ISession;
}

type IProps = IStoreProps

const mapStateToProps = ({sessionReducer}: IReduxState): IStoreProps => ({session: sessionReducer})
export const OnboardingContainer = connect(mapStateToProps, null)(({session}: IProps): JSX.Element => {
    const {t}: UseTranslationResponse = useTranslation()
    const theme: ITheme = useContext(ThemeContext)
    const [avatar, setAvatar]: [(string), Function] = useState<string>(DEFAULT_AVATAR)

    // let history = useHistory()

    const getTitleContent = (): IDangerousHTMLContent => ({__html: t('onboarding.title')})

    const onSubmit = async (values: IForm | AnyObject): Promise<void | object> => {
        try {
            values = { ...values, avatar,}
            const token: string = session?.token ?? ''

            await axios.post(
                `${serverURL}/auth/onboarding`,
                values,
                {
                    headers: {
                        'Authorization': token,
                    }
                }
            )

            localStorage.setItem('avatar', avatar)
            // history.push('/activity_feed')
        } catch (e) {
            if (!e.response) {
                return {
                    [FORM_ERROR]: t('serverError'),
                }
            }

            switch (e.response.data.message) {
            case 'invalid_birthdate':
                return { birthdate: t('onboarding.error.invalidBirthdate')}
            case 'username_already_taken':
                return { username: t('onboarding.error.usernameAlreadyTaken')}
            default:
                error('Error while onboarding: ')
                error(e.response)
                break
            }
        }
    }

    return (
        <SingleFormContainer>
            <SignUpBox>
                <Logo src={getLogo(theme)} alt='Bitsky' />
                <SFLanguageChooser />
                <BigTitle dangerouslySetInnerHTML={getTitleContent()} />
                <AvatarCropper avatar={avatar} setAvatar={setAvatar} />
                <FinalForm
                    onSubmit={onSubmit}
                    initialValues={{}}
                    render={({
                        handleSubmit,
                        submitError,
                    }: IFinalFormRenderProps) => <OnboardingForm handleSubmit={handleSubmit} submitError={submitError} />}
                />
            </SignUpBox>
        </SingleFormContainer>
    )
})

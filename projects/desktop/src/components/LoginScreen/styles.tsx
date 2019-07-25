import styled from 'styled-components'
import {
    Container as MaterialContainer,
    Box as MaterialBox,
    TextField,
    Button,
} from '@material-ui/core'
import background from '../../assets/img/background.png'
import { colors } from '../../constants'

export const Background = styled.div`
    background-image: url(${background});
    background-position: bottom center;
    min-height: 100vh;
`

export const WhiteOverlay = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
`

export const LoginContainer = styled(MaterialContainer)`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Box = styled(MaterialBox)`
    flex: 1;
    display: flex;
    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: 4px 8px 32px 0 rgba(0,0,0,0.10);
    height: 80vh;
`

export const LeftSideContainer = styled.div`
    flex: 2;
    padding: 12px;
    border-radius: 8px 0 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

export const BigTitle = styled.h1`
    margin: 0 0 40px 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: lighter;
    color: ${colors.grey};
    text-align: center;
    font-size: 27px;

    span {
        font-weight: 500;
        font-size: 26px;
    }
`

export const RightSideBackground = styled.div`
    background: blue;
    flex: 3;
    border-radius: 0 8px 8px 0;
    background-image: url(${background});
    background-position: bottom center;
    color: ${colors.white};
`

export const GradientOverlay = styled.div`
    background: linear-gradient(45deg, ${colors.gradientPinkTranslucent} 0%, ${colors.gradientBlueTranslucent} 100%);
    padding: 12px;
    height: calc(100% - 24px);
    border-radius: 0 8px 8px 0;
`

export const GradientButton = styled(Button)`
    border-radius: 8px;
    background: linear-gradient(45deg, ${colors.gradientBlue} 0%, ${colors.gradientPink} 100%);
    color: white;
    padding: 12px 25px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    box-shadow: none !important;
`

export const CenteredForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    margin: 0 auto;

    ${GradientButton} {
        margin-top: 16px;
    }
`

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 16px;
`

export const InputField = styled(TextField)`
    width: calc(100% - 2px);

    fieldset {
        border-left: none;
        border-radius: 8px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-color: ${colors.lightGrey};
    }

    label {
        color: ${colors.grey};
    }

    label.Mui-focused {
        color: ${colors.grey} !important;
    }

    div:hover, .Mui-focused {
        fieldset {
            border: 1px solid ${colors.lightGrey} !important;
        }
    }
`

export const InputBorder = styled.div<IInputBorderProps>`
    background: linear-gradient(180deg, ${colors.gradientPink} 0%, ${colors.gradientBlue} 100%);
    background: ${props => props.borderColor};
    flex: 1;
    max-width: 2px;
`

export const InputWithError = styled.div<IInputWithErrorProps>`
    position: relative;
    width: 100%;

    ${({active}) => active && `margin-bottom: 18px;`}
`

export const InputError = styled.span`
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    bottom: -22px;
    left: 0;
    color: ${colors.error};
`

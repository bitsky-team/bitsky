import styled from 'styled-components'
import {
    Container as MaterialContainer,
    Box as MaterialBox,
    TextField,
    Button,
} from '@material-ui/core'
import background from '../../assets/img/background.png'
import { colors } from '../../constants'
import {Link} from 'react-router-dom'
import {LanguageChooser} from '../common/LanguageChooser'

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
    height: 90vh;
`

export const LeftSideContainer = styled.div`
    flex: 2;
    padding: 12px;
    border-radius: 8px 0 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    position: relative;
`

export const BigTitle = styled.h1`
    margin: 0 0 40px 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: ${colors.grey};
    text-align: center;
    font-size: 27px;
    white-space: pre-line;

    span {
        font-weight: 500;
        font-size: 26px;
    }
`

export const RightSideBackground = styled.div`
    flex: 3;
    border-radius: 0 8px 8px 0;
    background: blue url(${background}) bottom center;
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
    font-family: sans-serif;

    fieldset {
        border-left: none;
        border-radius: 0 8px 8px 0;
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

export const CheckboxContainer = styled.label`
    width: calc(100% - 30px);
    margin-top: 16px;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    user-select: none;
    color: ${colors.grey};
    
    :hover {
        cursor: pointer;
    }
`

export const CheckboxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
    :checked ~ span {
        border: none;
        background: linear-gradient(45deg, ${colors.gradientPink} 0%, ${colors.gradientBlue} 100%);
        height: 16px;
        width: 16px;
    }
    
    :checked ~ span:after {
        display: block;
    }
`

export const CheckboxCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid ${colors.lightGrey};
    box-sizing: border-box;

    :after {
        content: '';
        position: absolute;
        display: none;
        left: 4.3px;
        top: 1px;
        width: 5px;
        height: 8px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

export const FormLink = styled(Link)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  color: ${colors.grey};
  text-decoration :none;
  font-size: 18px;
  margin-top: 16px;
`

export const LoginLanguageChooser = styled(LanguageChooser)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${colors.grey};
`

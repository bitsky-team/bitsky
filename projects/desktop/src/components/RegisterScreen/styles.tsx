import styled from 'styled-components'
import {
    Box as MaterialBox,
} from '@material-ui/core'
import {colors} from '../../constants'
import {LanguageChooser} from '../common/LanguageChooser'
import {GradientButton} from '../common/SingleForm'

export const Box = styled(MaterialBox)`
    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: 4px 8px 32px 0 rgba(0,0,0,0.10);
    position: relative;
    padding: 80px 40px 40px;
`

export const Logo = styled.img`
  height: 64px;
  position: absolute;
  top: 10px;
  left: 10px;
`

export const RegisterLanguageChooser = styled(LanguageChooser)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${colors.grey};
`

export const SubmitButton = styled(GradientButton)`
  margin-top: 30px !important;
  width: 50%;
`

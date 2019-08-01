import styled from 'styled-components'
import {
    Box as MaterialBox,
} from '@material-ui/core'
import background from '../../assets/img/background.png'
import { colors } from '../../constants'
import {LanguageChooser} from '../common/LanguageChooser'
import {CenteredForm} from '../common/SingleForm'

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

export const Logo = styled.img`
  height: 64px;
  position: absolute;
  top: 10px;
  left: 10px;
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

export const LoginLanguageChooser = styled(LanguageChooser)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${colors.grey};
`

export const LoginForm = styled(CenteredForm)`
  width: 70%;
`

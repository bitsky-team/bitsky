import styled from 'styled-components'
import { Button } from '@material-ui/core'

import { colors } from '../../../constants'

/**
 * Gradient button style
 */
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

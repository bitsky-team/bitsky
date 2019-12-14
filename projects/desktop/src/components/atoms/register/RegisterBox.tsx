import styled from 'styled-components'
import { Box as MaterialBox } from '@material-ui/core'

import { colors } from '../../../constants'

/**
 * Main box on the register page
 */
export const RegisterBox = styled(MaterialBox)`
    background-color: ${colors.white};
    border-radius: 8px;
    box-shadow: 4px 8px 32px 0 rgba(0,0,0,0.10);
    position: relative;
    padding: 80px 40px 40px;
`

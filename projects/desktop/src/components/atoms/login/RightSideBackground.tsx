import styled from 'styled-components'

import { colors } from '../../../constants'
import background from '../../../assets/img/background.png'

/**
 * Background behind the gradient overlay on the login page
 */
export const RightSideBackground = styled.div`
    flex: 3;
    border-radius: 0 8px 8px 0;
    background: transparent url(${background}) bottom center;
    color: ${colors.white};
`

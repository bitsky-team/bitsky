import styled from 'styled-components'

import { colors } from '../../../../../constants'

// Input error style
export const InputError = styled.span`
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    bottom: -22px;
    left: 0;
    color: ${colors.error};
`

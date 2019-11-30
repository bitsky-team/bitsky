import styled from 'styled-components'

import { colors } from '../../../../constants'

export const InputBorder = styled.div<IInputBorderProps>`
    background: linear-gradient(180deg, ${colors.gradientPink} 0%, ${colors.gradientBlue} 100%);
    background: ${props => props.borderColor};
    flex: 1;
    max-width: 2px;
`

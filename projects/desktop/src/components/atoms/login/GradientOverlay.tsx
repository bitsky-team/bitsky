import styled from 'styled-components'

import { colors } from '../../../constants'

/**
 * Gradient overlay used for the right part
 */
export const GradientOverlay = styled.div`
    background: linear-gradient(
        45deg,
        ${colors.gradientPinkTranslucent} 0%,
        ${colors.gradientBlueTranslucent} 100%
    );
    padding: 12px;
    height: calc(100% - 24px);
    border-radius: 0 8px 8px 0;
`

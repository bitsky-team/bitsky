import styled from 'styled-components'

import { GradientButton } from './GradientButton'

/**
 * Centered form style
 *
 * Form centered vertically and horizontally
 */
export const CenteredForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    ${GradientButton} {
        margin-top: 16px;
    }
`

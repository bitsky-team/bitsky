import styled from 'styled-components'

/**
 * Input with error style
 *
 * Wrapper used to adapt the input
 * when an error is displayed
 */
export const InputWithError = styled.div<IInputWithErrorProps>`
    position: relative;
    width: 100%;

    ${({active}) => active && `margin-bottom: 18px;`}
`
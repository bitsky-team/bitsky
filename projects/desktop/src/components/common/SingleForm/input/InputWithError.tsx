import styled from 'styled-components'

export const InputWithError = styled.div<IInputWithErrorProps>`
    position: relative;
    width: 100%;

    ${({active}) => active && `margin-bottom: 18px;`}
`

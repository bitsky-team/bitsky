import styled from 'styled-components'

import { IInputWithErrorProps } from '../../../../interfaces/forms'

/**
 * Input with error style
 *
 * Wrapper used to adapt the input
 * when an error is displayed
 */
export const InputWithError = styled.div<IInputWithErrorProps>`
    position: relative;
    width: 100%;

    ${({ active }: IInputWithErrorProps) => (active ? 'margin-bottom: 18px;' : '')}
`

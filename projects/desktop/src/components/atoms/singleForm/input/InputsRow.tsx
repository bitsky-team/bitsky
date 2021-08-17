import styled from 'styled-components'

/**
 * Inputs row
 *
 * Used to display x input on a single row
 */
export const InputsRow = styled.div`
    display: flex;

    > * {
        margin-right: 30px;
        min-width: 300px;
    }

    > :last-child {
        margin-right: 0;
    }
`

import styled from 'styled-components'

import { colors } from '../../../constants'

/**
 * Big title style
 *
 * Title displayed on login & register form
 */
export const BigTitle = styled.h1`
    margin: 0 0 40px 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: ${colors.grey};
    text-align: center;
    font-size: 27px;
    white-space: pre-line;

    span {
        font-weight: 500;
        font-size: 26px;
    }
`

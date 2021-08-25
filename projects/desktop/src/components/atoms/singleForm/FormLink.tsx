import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../../constants'

/**
 * Form link style
 *
 * Links like "Already signed up?"
 */
export const FormLink = styled(Link)`
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    color: ${colors.lightGrey};
    text-decoration: none;
    font-size: 18px;
    margin-top: 16px;
`

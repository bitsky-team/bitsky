import styled from 'styled-components'
import { Box as MaterialBox } from '@material-ui/core'

import { colors } from '../../../constants'

/**
 * Main box on the login page
 */
export const LoginBox = styled(MaterialBox)`
	flex: 1;
	display: flex;
	background-color: ${colors.white};
	border-radius: 8px;
	box-shadow: 4px 8px 32px 0 rgba(0, 0, 0, 0.1);
	height: 90vh;
`

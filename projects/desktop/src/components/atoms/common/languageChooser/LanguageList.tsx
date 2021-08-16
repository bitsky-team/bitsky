import styled from 'styled-components'
import { List } from '@material-ui/core'

import { colors } from '../../../../constants'

// Removing the margin-top for aesthetic reasons
export const LanguageList = styled(List)`
	margin-top: 0;

	.MuiListItem-root:hover {
		background-color: ${colors.whiteConstrast};
	}
`

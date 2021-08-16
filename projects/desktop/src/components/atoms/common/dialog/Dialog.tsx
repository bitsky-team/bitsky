import { Dialog as MuiDialog } from '@material-ui/core'
import styled from 'styled-components'

import { colors } from '../../../../constants'

export const Dialog = styled(MuiDialog)`
	background-color: rgba(0, 0, 0, 0.4);

	.MuiPaper-root {
		background-color: ${colors.white};
		color: ${colors.lightGrey};
	}

	.MuiGrid-container {
		margin-bottom: 16px;
	}
`

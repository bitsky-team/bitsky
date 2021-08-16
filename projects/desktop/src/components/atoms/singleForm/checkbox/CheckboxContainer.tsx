import styled from 'styled-components'
import posed from 'react-pose'

import { colors } from '../../../../constants'
import { getRawTheme } from '../../../../redux/helpers/theme'

interface ICheckboxContainer {
	pose: string
}

// When the component has the "invalid" prop, the color changes
// Using pose to have a smooth color change
const CheckboxContainerProps = {
	invalid: {
		color: colors.error(getRawTheme()),
	},
	valid: {
		color: colors.grey(getRawTheme()),
	},
}

// Checkbox checkmark's container style
export const CheckboxContainer = styled(posed.label(CheckboxContainerProps))<ICheckboxContainer>`
	width: calc(100% - 30px);
	margin-top: 16px;
	display: flex;
	align-items: center;
	position: relative;
	padding-left: 25px;
	margin-bottom: 12px;
	cursor: pointer;
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	user-select: none;
	color: ${colors.lightGrey};

	:hover {
		cursor: pointer;
	}
`

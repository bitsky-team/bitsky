import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import MuiSlider, { SliderProps } from '@material-ui/core/Slider'
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'

import { colors } from '../../../../constants/colors'

const Slider = styled(MuiSlider)`
	color: ${colors.gradientBlue};
`

const ClickableAdd = styled(Add)`
	cursor: pointer;
`

const ClickableRemove = styled(Remove)`
	cursor: pointer;
`

interface IOwnProps extends SliderProps {
	increment: () => void
	decrement: () => void
}

type IProps = IOwnProps

export const AvatarEditorSlider = ({
	value,
	onChange,
	increment,
	decrement,
}: IProps): JSX.Element => (
	<Grid container spacing={2}>
		<Grid item>
			<ClickableRemove onClick={decrement} />
		</Grid>
		<Grid item xs>
			<Slider
				value={value}
				onChange={onChange}
				aria-labelledby="avatar-editor-slider"
				min={0.1}
				max={2}
				step={0.01}
			/>
		</Grid>
		<Grid item>
			<ClickableAdd onClick={increment} />
		</Grid>
	</Grid>
)

import React from 'react'

import { RightSideBackground, GradientOverlay } from '../../'
import { IPropsChildren } from '../../../interfaces/generics'

/**
 * Right side of the login form (gradient part)
 */
export const RightSide = ({ children }: IPropsChildren): JSX.Element => (
	<RightSideBackground>
		<GradientOverlay>{children}</GradientOverlay>
	</RightSideBackground>
)

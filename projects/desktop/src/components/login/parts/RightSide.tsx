import React from 'react'

import { RightSideBackground, GradientOverlay } from '../styles'

export const RightSide = ({children}: IPropsChildren): JSX.Element => (
    <RightSideBackground>
        <GradientOverlay>
            {children}
        </GradientOverlay>
    </RightSideBackground>
)

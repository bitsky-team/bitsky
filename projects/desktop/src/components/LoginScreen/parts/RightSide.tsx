import React from 'react'
import { IProps } from '../../../interfaces/generics'
import { RightSideBackground, GradientOverlay } from '../styles'

export const RightSide = ({children}: IProps): JSX.Element => (
    <RightSideBackground>
        <GradientOverlay>
            {children}
        </GradientOverlay>
    </RightSideBackground>
)

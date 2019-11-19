import React from 'react'
import { Box as MaterialBox } from '@material-ui/core'

import { LeftSideContainer } from '../styles'

export const LeftSide = ({children}: IPropsChildren): JSX.Element => (
    <LeftSideContainer>
        <MaterialBox>
            {children}
        </MaterialBox>
    </LeftSideContainer>
)

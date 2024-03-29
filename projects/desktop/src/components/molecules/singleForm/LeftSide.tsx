import React from 'react'
import { Box as MaterialBox } from '@material-ui/core'

import { LeftSideContainer } from '../../'
import { IPropsChildren } from '../../../interfaces/generics'

/**
 * Left side of the login form (white part)
 */
export const LeftSide = ({ children }: IPropsChildren): JSX.Element => (
    <LeftSideContainer>
        <MaterialBox>{children}</MaterialBox>
    </LeftSideContainer>
)

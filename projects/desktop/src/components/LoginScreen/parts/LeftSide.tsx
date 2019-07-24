import React from 'react'
import { IProps } from '../../../interfaces/generics'
import { Box as MaterialBox } from '@material-ui/core'
import { LeftSideContainer } from '../styles'

export const LeftSide = ({children}: IProps): JSX.Element => (
    <LeftSideContainer>
        <MaterialBox>
            {children}
        </MaterialBox>
    </LeftSideContainer>
)
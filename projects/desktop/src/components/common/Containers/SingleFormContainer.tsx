import React from 'react'

import { Background, WhiteOverlay } from '../background'
import { FullHeightContainer } from './FullHeightContainer'

export const SingleFormContainer = ({children}: IPropsChildren): JSX.Element => (
    <Background>
        <WhiteOverlay>
            <FullHeightContainer maxWidth='lg'>
                {children}
            </FullHeightContainer>
        </WhiteOverlay>
    </Background>
)

import React from 'react'
import { Background, WhiteOverlay} from '../Background'
import {FullHeightContainer} from './FullHeightContainer'

export const SingleFormContainer = ({children}: IPropsChildren): JSX.Element => (
    <Background>
        <WhiteOverlay>
            <FullHeightContainer maxWidth='lg'>
                {children}
            </FullHeightContainer>
        </WhiteOverlay>
    </Background>
)

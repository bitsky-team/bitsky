import React from 'react'

import { Background, WhiteOverlay, FullHeightContainer } from '../../'
import { IPropsChildren } from '../../../interfaces/generics'

/**
 * Container who use multiples components
 * used to display a centered form with
 * a fancy background (login & register)
 *
 * @param props Component's props
 */
export const SingleFormContainer = ({children}: IPropsChildren): JSX.Element => (
    <Background>
        <WhiteOverlay>
            <FullHeightContainer maxWidth='lg'>
                {children}
            </FullHeightContainer>
        </WhiteOverlay>
    </Background>
)

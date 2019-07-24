import React from 'react'
import { Background, WhiteOverlay, Box, LoginContainer } from '../styles'

export const Container = ({children}: IPropsChildren): JSX.Element => (
    <Background>
        <WhiteOverlay>
            <LoginContainer maxWidth='lg'>
                <Box>
                    {children}
                </Box>
            </LoginContainer>
        </WhiteOverlay>
    </Background>
)

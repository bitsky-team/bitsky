import React from 'react'
import { IProps } from '../../../interfaces/generics'
import { Background, WhiteOverlay, Box, LoginContainer } from '../styles'

export const Container = ({children}: IProps): JSX.Element => (
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

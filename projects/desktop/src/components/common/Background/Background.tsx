import styled from 'styled-components'
import background from '../../../assets/img/background.png'

export const Background = styled.div`
    background-image: url(${background});
    background-position: bottom center;
    min-height: 100vh;
`

export const WhiteOverlay = styled.div`
    background-color: rgba(255, 255, 255, 0.6);
`

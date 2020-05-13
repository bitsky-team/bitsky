import styled from 'styled-components'

export const AvatarCropperContainer = styled.div`
    height: 175px;
    width: 175px;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 50%;
    position: relative;

    :hover span {
        display: flex;
        transition: 0.2s;
    }
`
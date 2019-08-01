import styled from 'styled-components'
import {colors} from '../../../../constants'

export const CheckboxContainer = styled.label`
    width: calc(100% - 30px);
    margin-top: 16px;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    user-select: none;
    color: ${colors.grey};
    
    :hover {
        cursor: pointer;
    }
`

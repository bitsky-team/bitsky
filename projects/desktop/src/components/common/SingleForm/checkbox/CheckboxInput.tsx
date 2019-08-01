import styled from 'styled-components'
import {colors} from '../../../../constants'

export const CheckboxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
    :checked ~ span {
        border: none;
        background: linear-gradient(45deg, ${colors.gradientPink} 0%, ${colors.gradientBlue} 100%);
        height: 16px;
        width: 16px;
    }
    
    :checked ~ span:after {
        display: block;
    }
`

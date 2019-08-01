import styled from 'styled-components'
import {colors} from '../../../../constants'

export const CheckboxCheckmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid ${colors.lightGrey};
    box-sizing: border-box;

    :after {
        content: '';
        position: absolute;
        display: none;
        left: 4.3px;
        top: 1px;
        width: 5px;
        height: 8px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

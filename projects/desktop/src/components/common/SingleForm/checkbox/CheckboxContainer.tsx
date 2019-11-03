import styled from 'styled-components'
import { colors } from '../../../../constants'
import { getRawTheme } from '../../../../helpers/theme'
import posed from 'react-pose'

interface ICheckboxContainer {
    pose: string,
}

const CheckboxContainerProps = {
    invalid: {
        color: colors.error(getRawTheme()),
    },
    valid: {
        color: colors.grey(getRawTheme()),
    },
}

export const CheckboxContainer = styled(posed.label(CheckboxContainerProps))<ICheckboxContainer>`
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

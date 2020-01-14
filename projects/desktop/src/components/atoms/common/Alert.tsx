import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from '../../../constants'
import { getRawTheme } from '../../../redux/helpers/theme'

const AlertBox = styled.div<IAlertColor>`
    background: ${props => props.bgColor};
    color: ${props => props.color};
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    font-family: 'Montserrat',sans-serif;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid ${props => props.borderColor};
`

interface IOwnProps {
    type: string,
    children: string
}

type IProps = IOwnProps

export const Alert = ({ type, children }: IProps) => {
    const [data, setData]: [IAlertColor, Function] = useState({})

    useEffect(() => {
        const theme: { theme: ITheme } = getRawTheme()

        if (!['info', 'warning', 'danger', 'success'].includes(type)) {
            throw new Error('Unknown alert type')
        }

        setData({
            bgColor: colors.alert[type].bg(theme),
            borderColor: colors.alert[type].border(theme),
            color: colors.alert[type].color(theme),
        })
    }, [type])

    return (
        <AlertBox
            bgColor={data.bgColor}
            borderColor={data.borderColor}
            color={data.color}
        >
            {children}
        </AlertBox>
    )
}

import styled from 'styled-components'
import { Button as MuiButton } from '@material-ui/core'

import { colors } from '../../../constants/colors'

export const Button = styled(MuiButton)`
    width: 100%;
    color: ${colors.grey};
`
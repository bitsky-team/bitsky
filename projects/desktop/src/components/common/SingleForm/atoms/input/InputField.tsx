import styled from 'styled-components'
import { TextField } from '@material-ui/core'

import { colors } from '../../../../../constants'

/**
 * Input field style
 *
 * Removing 2px on the width for the border
 */
export const InputField = styled(TextField)`
    width: calc(100% - 2px);
    font-family: sans-serif;

    fieldset {
        border-left: none;
        border-radius: 0 8px 8px 0;
        border-color: ${colors.lightGrey};
    }

    label {
        color: ${colors.grey};
    }

    label.Mui-focused {
        color: ${colors.grey} !important;
    }

    div:hover, .Mui-focused {
        fieldset {
            border: 1px solid ${colors.lightGrey} !important;
        }
    }
`

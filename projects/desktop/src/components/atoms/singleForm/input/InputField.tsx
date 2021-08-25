import styled from 'styled-components'
import { TextField } from '@material-ui/core'

import { colors } from '../../../../constants'

/**
 * Input field style
 *
 * Removing 2px on the width for the border
 */
export const InputField = styled(TextField)`
    width: calc(100% - 2px);
    font-family: sans-serif;
    background: ${colors.inputGrey};
    border-radius: 8px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    input,
    textarea {
        color: ${colors.grey};
    }

    fieldset {
        border: none !important;
    }

    label {
        color: ${colors.grey};
    }

    label.Mui-focused {
        color: ${colors.grey} !important;
    }

    div:hover,
    .Mui-focused {
        fieldset {
            border: none;
        }
    }

    .MuiIconButton-root {
        color: ${colors.grey};
    }
`

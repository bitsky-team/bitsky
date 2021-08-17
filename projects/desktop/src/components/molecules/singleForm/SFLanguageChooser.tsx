import styled from 'styled-components'

import { colors } from '../../../constants'
import { LanguageChooser } from '../languageChooser/LanguageChooser'

/**
 * Custom style for the language chooser button on single forms
 */
export const SFLanguageChooser = styled(LanguageChooser)`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${colors.lightGrey};
`

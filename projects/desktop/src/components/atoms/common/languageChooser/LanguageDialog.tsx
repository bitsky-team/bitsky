import { Dialog } from '@material-ui/core'
import styled from 'styled-components'

import { colors } from '../../../../constants'

export const LanguageDialog = styled(Dialog)`
  background-color: rgba(0,0,0,0.4);

  .MuiPaper-root {
    background-color: ${colors.white};
    color: ${colors.lightGrey};
  }
`

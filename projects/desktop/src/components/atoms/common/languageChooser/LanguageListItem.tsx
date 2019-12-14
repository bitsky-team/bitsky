import styled from 'styled-components'
import { ListItem } from '@material-ui/core'

/**
 * This component is the list item in the language chooser
 * Each item is displayed on a line and centered horizontally
 */
export const LanguageListItem = styled(ListItem)`
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  font-weight: 400;
`

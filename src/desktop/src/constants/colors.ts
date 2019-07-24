import {IStringTMap} from '../interfaces/generics'
import theme, { ThemeSet } from 'styled-theming'

/*
  Colors used with styled components
*/
export const colors: IStringTMap<ThemeSet> = {
  gradientBlue: theme('mode', {
    classic: '#6CC1FF',
  }),

  gradientPink: theme('mode', {
    classic: '#FF80FA',
  }),
}
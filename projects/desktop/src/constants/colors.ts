import theme, { ThemeSet } from 'styled-theming'

/*
  Colors used with styled components
*/
export const colors: IStringTMap<ThemeSet> = {
  white: theme('mode', {
    classic: '#FDFDFD',
  }),

  grey: theme('mode', {
    classic: '#8A8A8A',
  }),

  lightGrey: theme('mode', {
    classic: '#E6E6E6',
  }),

  inputGrey: theme('mode', {
    classic: '#BFBFBF',
  }),

  gradientBlue: theme('mode', {
    classic: '#9BD0FD',
  }),

  gradientPink: theme('mode', {
    classic: '#F5A1F6',
  }),

  gradientBlueTranslucent: theme('mode', {
    classic: 'rgb(108,193,255, 0.5)',
  }),

  gradientPinkTranslucent: theme('mode', {
    classic: 'rgb(255,128,250, 0.5)',
  }),

  error: theme('mode', {
    classic: '#e35656',
  }),
}

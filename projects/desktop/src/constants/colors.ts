import theme from 'styled-theming'

import { IStringTMap } from '../interfaces/generics'

/*
  Colors used with styled components
*/
export const colors: IStringTMap<any> = {
    // basic colors
    white: theme('mode', {
        classic: '#FDFDFD',
    }),

    grey: theme('mode', {
        classic: '#8A8A8A',
    }),

    lightGrey: theme('mode', {
        classic: '#E6E6E6',
    }),

    error: theme('mode', {
        classic: '#e35656',
    }),

    // forms
    inputGrey: theme('mode', {
        classic: '#BFBFBF',
    }),

    // gradients
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

    // alerts
    alert: {
        info: {
            bg: theme('mode', {
                classic: '#e2e3e5',
            }),
            border: theme('mode', {
                classic: '#cccccc',
            }),
            color: theme('mode', {
                classic: '#383d41',
            }),
        },

        warning: {
            bg: theme('mode', {
                classic: '#fff3cd',
            }),
            border: theme('mode', {
                classic: '#ffedb8',
            }),
            color: theme('mode', {
                classic: '#856404',
            }),
        },

        danger: {
            bg: theme('mode', {
                classic: '#ffe8e8',
            }),
            border: theme('mode', {
                classic: '#ffcbcb',
            }),
            color: theme('mode', {
                classic: '#e35656',
            }),
        },

        success: {
            bg: theme('mode', {
                classic: '#eff7ff',
            }),
            border: theme('mode', {
                classic: '#d7edff',
            }),
            color: theme('mode', {
                classic: '#9BD0FD',
            }),
        },
    },
}

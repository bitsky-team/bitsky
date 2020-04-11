import theme from 'styled-theming'

import { IStringTMap } from '../interfaces/generics'

/*
  Colors used with styled components
*/
export const colors: IStringTMap<any> = {
    // basic colors
    white: theme('mode', {
        classic: '#FDFDFD',
        dark: '#18191A',
    }),

    whiteConstrast: theme('mode', {
        classic: 'rgba(0,0,0,0.05)',
        dark: 'rgba(255,255,255,0.05)',
    }),

    grey: theme('mode', {
        classic: '#6d6d6d',
        dark: '#414446',
    }),

    lightGrey: theme('mode', {
        classic: '#8A8A8A',
        dark: '#737475',
    }),

    error: theme('mode', {
        classic: '#e35656',
        dark: '#984f4f',
    }),

    // forms
    inputGrey: theme('mode', {
        classic: '#f7f7f7',
        dark: '#242526',
    }),

    // overlays
    singleFormOverlay: theme('mode', {
        classic: 'rgba(255, 255, 255, 0.6)',
        dark: 'rgba(0, 0, 0, 0.8)',
    }),

    // gradients
    gradientBlue: theme('mode', {
        classic: '#9BD0FD',
        dark: '#23425d',
    }),

    gradientPink: theme('mode', {
        classic: '#F5A1F6',
        dark: '#461f46',
    }),

    gradientBlueTranslucent: theme('mode', {
        classic: 'rgb(108,193,255, 0.5)',
        dark: 'rgba(21, 61, 90, 0.7)',
    }),

    gradientPinkTranslucent: theme('mode', {
        classic: 'rgb(255,128,250, 0.5)',
        dark: 'rgba(62, 14, 61, 0.7)',
    }),

    buttonColor: theme('mode', {
        classic: '#FFF',
        dark: '#8a8a8a',
    }),

    // alerts
    alert: {
        info: {
            bg: theme('mode', {
                classic: '#e2e3e5',
                dark: '#e2e3e5',
            }),
            border: theme('mode', {
                classic: '#cccccc',
                dark: '#cccccc',
            }),
            color: theme('mode', {
                classic: '#383d41',
                dark: '#383d41',
            }),
        },

        warning: {
            bg: theme('mode', {
                classic: '#fff3cd',
                dark: '#fff3cd',
            }),
            border: theme('mode', {
                classic: '#ffedb8',
                dark: '#ffedb8',
            }),
            color: theme('mode', {
                classic: '#856404',
                dark: '#856404',
            }),
        },

        danger: {
            bg: theme('mode', {
                classic: '#ffe8e8',
                dark: '#ffe8e8',
            }),
            border: theme('mode', {
                classic: '#ffcbcb',
                dark: '#ffcbcb',
            }),
            color: theme('mode', {
                classic: '#e35656',
                dark: '#e35656',
            }),
        },

        success: {
            bg: theme('mode', {
                classic: '#eff7ff',
                dark: '#eff7ff',
            }),
            border: theme('mode', {
                classic: '#d7edff',
                dark: '#d7edff',
            }),
            color: theme('mode', {
                classic: '#9BD0FD',
                dark: '#9BD0FD',
            }),
        },
    },
}

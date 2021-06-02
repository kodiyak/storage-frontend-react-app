import { extendTheme, theme as themeChakra } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  gray: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#242424',
    700: '#1b1b1b',
    800: '#101010',
    900: '#0d0d0d',
  },
  primary: {
    50: '#ffe5e5',
    100: '#fbbabc',
    200: '#f18e92',
    300: '#ea6268',
    400: '#e3363d',
    500: '#c91c24',
    600: '#9d141b',
    700: '#710d13',
    800: '#460509',
    900: '#1e0000',
  },
  darken: {
    50: 'rgba(0,0,0,.1)',
    100: 'rgba(0,0,0,.2)',
    200: 'rgba(0,0,0,.3)',
    300: 'rgba(0,0,0,.4)',
    400: 'rgba(0,0,0,.5)',
    500: 'rgba(0,0,0,.6)',
    600: 'rgba(0,0,0,.7)',
    700: 'rgba(0,0,0,.8)',
    800: 'rgba(0,0,0,.9)',
    900: 'rgba(0,0,0,1)',
  },
  lighten: {
    50: 'rgba(255,255,255,.1)',
    100: 'rgba(255,255,255,.2)',
    200: 'rgba(255,255,255,.3)',
    300: 'rgba(255,255,255,.4)',
    400: 'rgba(255,255,255,.5)',
    500: 'rgba(255,255,255,.6)',
    600: 'rgba(255,255,255,.7)',
    700: 'rgba(255,255,255,.8)',
    800: 'rgba(255,255,255,.9)',
    900: 'rgba(255,255,255,1)',
  },
  linkedin: {
    50: '#e1f3ff',
    100: '#bdd7f6',
    200: '#95bceb',
    300: '#6ba1df',
    400: '#4486d5',
    500: '#2a6cbb',
    600: '#1e5493',
    700: '#123c6a',
    800: '#052442',
    900: '#000d1c',
  },
  facebook: {
    50: '#e7f0ff',
    100: '#c4d3ef',
    200: '#a0b5e0',
    300: '#7c98d0',
    400: '#587ac1',
    500: '#3e61a7',
    600: '#2f4b83',
    700: '#20365f',
    800: '#11203c',
    900: '#020b1b',
  },
  google: {
    50: '#ffe8e4',
    100: '#f8c0bc',
    200: '#ee9992',
    300: '#e57167',
    400: '#dc493d',
    500: '#c23023',
    600: '#98241a',
    700: '#6d1812',
    800: '#440d09',
    900: '#1e0100',
  },
  yellow: {
    50: '#ffffdd',
    100: '#f9f7b4',
    200: '#f3ed89',
    300: '#eee05c',
    400: '#e9d130',
    500: '#cfc416',
    600: '#9fa10d',
    700: '#6a7306',
    800: '#3b4500',
    900: '#151900',
  },
}

const breakpoints = createBreakpoints({
  sm: '481px',
  md: '1280px',
  lg: '1360px',
  xl: '1919px',
})

const theme = extendTheme({
  shadows: {
    ...themeChakra.shadows,
    outline: 'none',
  },
  breakpoints,
  fonts: {
    body: '"Exo 2"',
    heading: '"Exo 2"',
  },
  fontSizes: {
    ...themeChakra.fontSizes,
    md: '14px',
  },
  colors,
})

export default theme
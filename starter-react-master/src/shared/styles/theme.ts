import { createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

export interface Colors {
  primary: string
}

export const colors: Colors = {
  primary: '#FAFAFA',
}

export interface Theme {
  [propName: string]: string | undefined
  primary: string
}
export const theme: Theme = {
  primary: colors.primary,
}

export interface ScreenSizes {
  mediaS: number
  mediaM: number
  mediaL: number
  mediaXL: number
}
export const screenSizes: ScreenSizes = {
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
}

export const globaltheme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem',
        backgroundColor: green[600],
      },
    },
  },
})

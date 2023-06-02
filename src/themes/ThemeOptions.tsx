import { ThemeOptions } from '@material-ui/core/styles/createTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#D817C7',
    },

    secondary: {
      main: '#D817C7',
    },

    text: {
      disabled: '#4bd6a0',
      secondary: 'rgba(255,255,255,0.78)',
      hint: 'rgba(255, 255, 255, 0.5)',
    },

    success: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
};
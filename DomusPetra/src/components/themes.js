import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
      contrastText: '#fff',
    },
    // Outras cores e configurações de tema claro
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#90caf9',
      contrastText: '#000',
    },
    // Outras cores e configurações de tema escuro
  },
});
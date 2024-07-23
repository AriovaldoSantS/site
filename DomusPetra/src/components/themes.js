// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
   palette: {
    primary: {
      main: '#000000', // Preto
    },
    secondary: {
      main: '#ffffff', // Branco
    },
    background: {
      default: '#f5f5f5', // Cinza claro
    },
    text: {
      primary: '#000000',
      secondary: '#666666', // Cinza escuro
    },
  },
  typography: {
    // ... (configuração de tipografia)
  },

  typography: {
    fontFamily: [
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
});

export default theme;

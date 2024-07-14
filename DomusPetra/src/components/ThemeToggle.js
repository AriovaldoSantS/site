import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    color: theme.palette.primary.contrastText,
  },
}));

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.button}
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Modo Claro' : 'Modo Escuro'}
    >
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
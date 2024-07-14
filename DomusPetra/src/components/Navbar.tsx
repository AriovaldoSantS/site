import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Switch, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setDarkMode }) => {
  const [checked, setChecked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setDarkMode(event.target.checked);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Domus Petra
        </Typography>
        <Box sx={{ display: isMobile ? 'none' : 'flex', flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">Sobre</Button>
          <Button color="inherit" component={Link} to="/services" onClick={handleMenuClick}>Serviços</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/services/consultoria" onClick={handleMenuClose}>Consultoria</MenuItem>
            <MenuItem component={Link} to="/services/treinamentos" onClick={handleMenuClose}>Treinamentos</MenuItem>
            <MenuItem component={Link} to="/services/palestras" onClick={handleMenuClose}>Palestras</MenuItem>
          </Menu>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/contact">Contato</Button>
        </Box>
        <Switch checked={checked} onChange={handleThemeChange} />
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
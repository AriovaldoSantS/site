import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Switch, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Importar as logos
import logoLight from '../assets/Ativo 1.png'; // Logo para o modo claro
import logoDark from '../assets/Ativo 2.png'; // Logo para o modo escuro

interface NavbarProps {
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setDarkMode }) => {
  const [checked, setChecked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

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

  // Verificar se estamos na página do Blog
  const isBlogPage = location.pathname === '/blog';

  // Escolher a logo com base no modo do tema
  const logo = theme.palette.mode === 'light' ? logoLight : logoDark;

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: theme.palette.mode === 'light' ? '#cdcbcb' : '#121212', 
      color: theme.palette.text.primary 
    }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        {/* Adicionar a logo */}
        <img src={logo} alt="DomusPetra Logo" style={{ height: '40px', marginRight: '16px' }} />
        <Box sx={{ display: isMobile ? 'none' : 'flex', flexGrow: 1, alignItems: 'center' }}>
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
        {/* Botão de Login visível apenas no Blog */}
        {isBlogPage && <Button color="inherit" component={Link} to="/login">Login</Button>}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

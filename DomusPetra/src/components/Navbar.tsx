// src/components/Navbar.tsx
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Importar as logos
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // Icone administrativo
import logoLight from '../assets/Ativo 1.png'; // Logo para o modo claro
import logoDark from '../assets/Ativo 2.png'; // Logo para o modo escuro

interface NavbarProps {
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setDarkMode }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Escolher a logo com base no modo do tema
  const logo = theme.palette.mode === 'light' ? logoLight : logoDark;

  // Verificar se estamos na página do Blog
  const isBlogPage = location.pathname === '/blog';

  return (
    <AppBar position="static" sx={{ 
      backgroundColor: theme.palette.mode === 'light' ? '#cdcbcb' : '#121212', 
      color: theme.palette.text.primary 
    }}>
      <Toolbar>
        {isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        {/* Adicionar a logo */}
        <Link to="/">
          <img src={logo} alt="DomusPetra Logo" style={{ height: '40px', marginRight: '16px' }} />
        </Link>
        <Box sx={{ display: isMobile ? 'none' : 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">Sobre</Button>
          <Button color="inherit" component={Link} to="/consulting">Consultoria</Button>
          <Button color="inherit" component={Link} to="/palestras">Palestras</Button>
          <Button color="inherit" component={Link} to="/training">Treinamento</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/contact">Contato</Button>
        </Box>
        {isBlogPage && (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="admin-login"
            component={Link}
            to="/admin"
          >
            <AdminPanelSettingsIcon />
          </IconButton>
        )}
        <IconButton sx={{ ml: 1 }} onClick={() => setDarkMode(!theme.palette.mode === 'dark')} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

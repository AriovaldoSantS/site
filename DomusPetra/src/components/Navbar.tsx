import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'; // Ícone para área administrativa
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Importar as logos
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

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode); // Alternar entre modos claro e escuro
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
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
        )}
        {/* Adicionar a logo */}
        <img src={logo} alt="DomusPetra Logo" style={{ height: '40px', marginRight: '16px' }} />
        <Box sx={{ display: isMobile ? 'none' : 'flex', flexGrow: 1, alignItems: 'center' }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">Sobre</Button>
          <Button color="inherit" component={Link} to="/consulting">Consultoria</Button>
          <Button color="inherit" component={Link} to="/palestras">Palestras</Button>
          <Button color="inherit" component={Link} to="/training">Treinamento</Button>
          <Button color="inherit" component={Link} to="/blog">Blog</Button>
          <Button color="inherit" component={Link} to="/contact">Contato</Button>
        </Box>
        <Box sx={{ display: isMobile ? 'flex' : 'none' }}>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>Sobre</MenuItem>
            <MenuItem component={Link} to="/consulting" onClick={handleMenuClose}>Consultoria</MenuItem>
            <MenuItem component={Link} to="/palestras" onClick={handleMenuClose}>Palestras</MenuItem>
            <MenuItem component={Link} to="/training" onClick={handleMenuClose}>Treinamento</MenuItem>
            <MenuItem component={Link} to="/blog" onClick={handleMenuClose}>Blog</MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>Contato</MenuItem>
          </Menu>
        </Box>
        {/* Adicionar botão de alternância de tema */}
        <IconButton color="inherit" onClick={handleDarkModeToggle} sx={{ ml: 2 }}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {/* Botão de administração */}
        {location.pathname !== '/admin' && (
          <IconButton
            color="inherit"
            component={Link}
            to="/admin"
            sx={{ ml: 2, display: { xs: 'none', md: 'flex' } }}
            title="Área Administrativa"
          >
            <AdminPanelSettingsIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

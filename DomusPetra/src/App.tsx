// src/App.tsx
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import AddPalestra from './pages/AddPalestra'; // Importar a nova página
import Admin from './pages/Admin';
import AdminDashboard from './pages/AdminDashboard';
import Blog from './pages/Blog';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Palestras from './pages/Palestras';
import Training from './pages/Training';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/add-palestra" element={<AddPalestra />} /> {/* Adicionar rota */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

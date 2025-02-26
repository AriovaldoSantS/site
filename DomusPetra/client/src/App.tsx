// src/App.tsx
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PalestraManager from './components/PalestraManager';
import About from './pages/About';
import AddBlog from './pages/AddBlog';
import AddConsulting from './pages/AddConsulting';
import AddTraining from './pages/AddTraining';
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
          <Route path="/palestras" element={<Palestras />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/training" element={<Training />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/palestra-manager" element={<PalestraManager />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/add-consulting" element={<AddConsulting />} />
          <Route path="/add-training" element={<AddTraining />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;

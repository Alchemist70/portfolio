import React from 'react';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from '../contexts/ThemeContext';
import Footer from './Footer';

const Layout = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: 'background.default'
      }}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
          bgcolor: 'background.default'
        }}
      >
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout; 
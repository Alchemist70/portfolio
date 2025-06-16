import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit'
          }}
        >
          Portfolio
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/projects"
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/certificates"
          >
            Certificates
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/publications"
          >
            Publications
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/blog"
          >
            Blog
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/contact"
          >
            Contact
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/about"
          >
            About
          </Button>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleDarkMode}
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

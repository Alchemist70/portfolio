import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AnimatedContainer from "./AnimatedContainer";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <AnimatedContainer delay={0.1} y={-20}>
      <AppBar
        position="sticky"
        sx={{ px: { xs: 1, sm: 2 }, py: { xs: 0.5, sm: 1 } }}
      >
        <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "flex-start", sm: "center" },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.8rem" },
            fontWeight: 700,
            mb: { xs: 1, sm: 0 },
          }}
        >
          My Portfolio
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 2 } }}>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/projects"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Projects
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/certificates"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Certificates
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/publications"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Publications
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/blog"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Blog
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/contact"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            Contact
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/about"
            sx={{
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 1.5, sm: 2 },
              py: { xs: 0.5, sm: 1 },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                transform: 'translateY(-1px)',
              }
            }}
          >
            About
          </Button>
          <IconButton 
            sx={{ 
              ml: 1,
              fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" }
            }} 
            onClick={toggleDarkMode} 
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
        </Toolbar>
      </AppBar>
    </AnimatedContainer>
  );
};

export default Navbar;

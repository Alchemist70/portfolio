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
        sx={{
          px: { xs: 1, sm: 2 },
          py: { xs: 0.5, sm: 1 },
          background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          boxShadow: "0 4px 20px rgba(25, 118, 210, 0.15)",
          backdropFilter: "blur(10px)",
        }}
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
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
              "&:hover": {
                textShadow: "0 4px 8px rgba(0,0,0,0.2)",
                transform: "scale(1.02)",
              },
            }}
          >
            My Portfolio
          </Typography>

          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 1, sm: 2 } }}
          >
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/projects"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/certificates"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              Certificates
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/publications"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              Publications
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/blog"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              Blog
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/contact"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              Contact
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              to="/about"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                fontWeight: 600,
                textTransform: "none",
                px: { xs: 1.5, sm: 2 },
                py: { xs: 0.5, sm: 1 },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
              }}
            >
              About
            </Button>
            <IconButton
              sx={{
                ml: 1,
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  transform: "translateY(-2px) scale(1.05)",
                },
                "&:active": {
                  transform: "translateY(0px) scale(1.02)",
                },
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

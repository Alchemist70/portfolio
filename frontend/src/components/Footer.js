import React from 'react';
import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        mt: 4,
        py: 3,
        px: 2,
        background: 'linear-gradient(90deg, #181c24 0%, #23263a 100%)',
        color: 'rgba(255,255,255,0.85)',
        textAlign: 'center',
        boxShadow: '0 -2px 16px 0 rgba(0,0,0,0.08)',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center" mb={1}>
        <IconButton
          component={Link}
          href="https://github.com/Alchemist70" // TODO: Replace with your GitHub
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          sx={{ color: 'inherit' }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://linkedin.com/in/abbas-abdulhadi" // TODO: Replace with your LinkedIn
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ color: 'inherit' }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:abdulhadiakanni@gmail.com" // TODO: Replace with your email
          aria-label="Email"
          sx={{ color: 'inherit' }}
        >
          <EmailIcon />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        &copy; {new Date().getFullYear()} Abdulhadi Abbas Akanni. All rights reserved.
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.7 }}>
        Built with React, Material-UI, Node.js, and MongoDB
      </Typography>
    </Box>
  );
};

export default Footer; 
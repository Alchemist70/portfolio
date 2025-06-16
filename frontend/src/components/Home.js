import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Avatar,
  Paper,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const MotionBox = motion(Box);

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Grid container spacing={4} sx={{ minHeight: '80vh', alignItems: 'center' }}>
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h1" gutterBottom>
              Hi, I'm <span style={{ color: '#2196f3' }}>Your Name</span>
            </Typography>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Software Developer & Tech Enthusiast
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to my portfolio! I'm passionate about creating innovative solutions
              and sharing knowledge through my work and publications.
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/projects"
                size="large"
              >
                View My Work
              </Button>
              <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/contact"
                size="large"
              >
                Contact Me
              </Button>
            </Box>
          </MotionBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <Avatar
              src="/your-profile-picture.jpg"
              alt="Your Name"
              sx={{
                width: 300,
                height: 300,
                border: '4px solid #2196f3',
              }}
            />
          </MotionBox>
        </Grid>
      </Grid>

      {/* Quick Links Section */}
      <Grid container spacing={4} sx={{ mt: 8 }}>
        <Grid item xs={12} md={4}>
          <Card
            component={RouterLink}
            to="/certificates"
            sx={{
              height: '100%',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-8px)' },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Certificates
              </Typography>
              <Typography color="text.secondary">
                View my professional certifications and achievements
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={RouterLink}
            to="/projects"
            sx={{
              height: '100%',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-8px)' },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Projects
              </Typography>
              <Typography color="text.secondary">
                Explore my latest projects and GitHub repositories
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            component={RouterLink}
            to="/publications"
            sx={{
              height: '100%',
              textDecoration: 'none',
              transition: 'transform 0.2s',
              '&:hover': { transform: 'translateY(-8px)' },
            }}
          >
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Publications
              </Typography>
              <Typography color="text.secondary">
                Read my articles and technical publications
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Social Links */}
      <Paper
        elevation={0}
        sx={{
          mt: 8,
          p: 3,
          backgroundColor: 'rgba(33, 150, 243, 0.1)',
          borderRadius: 2,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <IconButton
            component="a"
            href="https://github.com/yourusername"
            target="_blank"
            color="primary"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            color="primary"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:your.email@example.com"
            color="primary"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
      </Paper>
    </Container>
  );
};

export default Home;

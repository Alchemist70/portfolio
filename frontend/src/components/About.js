import React, { useEffect, useState } from 'react';
import { Box, Typography, Avatar, Grid, Chip, Paper, Button, CircularProgress, Alert } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { api } from '../services/api';
import AnimatedContainer from './AnimatedContainer';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await api.get('/about');
        setAbout(res.data);
      } catch (err) {
        setError('Failed to load about info');
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) return <Box display="flex" justifyContent="center" py={8}><CircularProgress /></Box>;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!about) return <Alert severity="info">No about info found.</Alert>;

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2 }}>
      <AnimatedContainer delay={0.2}>
        <Paper elevation={8} sx={{ maxWidth: 900, mx: 'auto', p: { xs: 3, md: 6 }, borderRadius: 6, background: 'linear-gradient(120deg, #1976d2 0%, #00bcd4 100%)', color: '#fff', boxShadow: 8 }}>
          <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Avatar
              src={about.photoUrl ? about.photoUrl : '/profile-photo.jpg'}
              alt={about.name}
              sx={{ width: 160, height: 160, mx: 'auto', mb: 2, boxShadow: 4, border: '5px solid #fff' }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, mt: 2 }}>
              {about.name}
            </Typography>
            <Typography variant="subtitle1" sx={{ opacity: 0.85 }}>
              Full Stack Developer & Machine Learning Enthusiast
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.15rem', lineHeight: 1.7 }}>
              {about.bio}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', opacity: 0.9 }}>
              <b>Values:</b> {about.values}
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              gap={1.5}         // horizontal and vertical gap
              sx={{ mb: 2 }}
            >
              {about.skills && about.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  color="secondary"
                  sx={{ fontWeight: 500 }}
                />
              ))}
            </Box>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ fontWeight: 700, borderRadius: 8, mt: 2 }}
            >
              Contact Me
            </Button>
          </Grid>
        </Grid>
        </Paper>
      </AnimatedContainer>
    </Box>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  CardActions,
  CircularProgress,
  Alert,
  useTheme,
  Paper
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { motion } from 'framer-motion';
import { api } from '../services/api';

const MotionCard = motion(Card);

const Projects = ({ featured = false }) => {
  const theme = useTheme();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get(`/projects${featured ? '?featured=true' : ''}`);
        const data = response.data;
        setProjects(
          Array.isArray(data)
            ? data
            : data.items || data.data || []
        );
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };
    fetchProjects();
  }, [featured]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 5 }}>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, background: 'linear-gradient(90deg, #23263a 0%, #1976d2 100%)', color: '#fff', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            My Projects
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.95 }}>
            Explore a curated selection of my work, where I blend creativity, technology, and problem-solving to deliver impactful solutions. I enjoy collaborating on innovative projects and always strive for excellence in every line of code.
          </Typography>
        </Paper>
      </Box>
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 800, letterSpacing: 1, color: theme.palette.primary.main, mb: 6 }}
      >
        Projects
      </Typography>
      <Grid container spacing={5}>
        {projects.map((project) => (
          <Grid item key={project._id} xs={12} sm={6} md={4}>
            <MotionCard
              whileHover={{ scale: 1.04, boxShadow: theme.palette.mode === 'dark' ? '0 8px 32px 0 rgba(33,150,243,0.28)' : '0 8px 32px 0 rgba(33,150,243,0.18)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              elevation={8}
              sx={{
                borderRadius: 5,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(135deg, #23263a 0%, #181c24 100%)'
                  : 'linear-gradient(135deg, #f4f7fa 0%, #e0e7ef 100%)',
                color: theme.palette.text.primary,
                boxShadow: theme.palette.mode === 'dark' ? '0 4px 24px 0 rgba(0,0,0,0.28)' : '0 4px 24px 0 rgba(60, 72, 88, 0.10)',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 420,
              }}
            >
              {project.imageUrl && (
                <CardMedia
                  component="img"
                  height="180"
                  image={project.imageUrl}
                  alt={project.title}
                  sx={{ objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2, mb: 1 }}>
                  {Array.isArray(project.technologies) && project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mr: 1, mb: 1, fontWeight: 600, background: theme.palette.mode === 'dark' ? '#23263a' : '#e0e7ef', color: theme.palette.primary.main }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                {project.githubUrl && (
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    sx={{ borderRadius: 8, fontWeight: 600, mr: 1 }}
                  >
                    GitHub
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    startIcon={<PlayCircleOutlineIcon />}
                    href={project.demoUrl}
                    target="_blank"
                    sx={{ borderRadius: 8, fontWeight: 600, boxShadow: '0 2px 8px 0 rgba(124,58,237,0.10)' }}
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;

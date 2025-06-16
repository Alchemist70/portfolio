import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  CircularProgress,
  Alert,
  CardActions,
  useTheme,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { api } from '../services/api';

const MotionCard = motion(Card);

const Publications = ({ featured = false }) => {
  const theme = useTheme();
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await api.get(`/publications${featured ? '?featured=true' : ''}`);
        const data = response.data;
        setPublications(
          Array.isArray(data)
            ? data
            : data.items || data.data || []
        );
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch publications');
        setLoading(false);
      }
    };

    fetchPublications();
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
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, background: 'linear-gradient(90deg, #23263a 0%, #00bcd4 100%)', color: '#fff', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Publications
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.95 }}>
            I am passionate about sharing knowledge and contributing to the tech community. My publications cover a range of topics in software engineering, machine learning, and best practices for building robust systems.
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
        Publications
      </Typography>
      <Grid container spacing={5}>
        {publications.map((publication) => (
          <Grid item key={publication._id} xs={12} sm={6} md={4}>
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
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                  {publication.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.secondary }}>
                  {publication.journal}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, color: theme.palette.text.secondary }}>
                  Published: {publication.publicationDate ? new Date(publication.publicationDate).toLocaleDateString() : ''}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                  DOI: {publication.doi}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                  {publication.abstract}
                </Typography>
                <Box sx={{ mt: 1, mb: 1 }}>
                  {Array.isArray(publication.keywords) && publication.keywords.map((keyword) => (
                    <Chip
                      key={keyword}
                      label={keyword}
                      size="small"
                      sx={{ mr: 1, mb: 1, fontWeight: 600, background: theme.palette.mode === 'dark' ? '#23263a' : '#e0e7ef', color: theme.palette.primary.main }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                {publication.doi && (
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    startIcon={<OpenInNewIcon />}
                    href={`https://doi.org/${publication.doi}`}
                    target="_blank"
                    sx={{ borderRadius: 8, fontWeight: 600, mr: 1 }}
                  >
                    View Paper
                  </Button>
                )}
                {publication.pdfUrl && (
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    startIcon={<OpenInNewIcon />}
                    href={publication.pdfUrl}
                    target="_blank"
                    sx={{ borderRadius: 8, fontWeight: 600, boxShadow: '0 2px 8px 0 rgba(124,58,237,0.10)' }}
                  >
                    Download PDF
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

export default Publications; 
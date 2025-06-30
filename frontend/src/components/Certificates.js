import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  CircularProgress,
  Alert,
  Paper,
  IconButton
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { api } from '../services/api';

const Certificates = ({ featured = false }) => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;
  const theme = useTheme();

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await api.get(`/certificates?page=${currentPage}&size=${itemsPerPage}${featured ? '&featured=true' : ''}`);
        const data = response.data;
        setCertificates(Array.isArray(data.items) ? data.items : []);
        setTotalPages(data.pagination?.totalPages || 1);
        setTotalItems(data.pagination?.totalItems || 0);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch certificates');
        setLoading(false);
      }
    };
    fetchCertificates();
  }, [featured, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, background: 'linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)', color: '#fff', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            Certifications & Achievements
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.95 }}>
            My certifications reflect my dedication to continuous learning and professional growth. Each certificate represents a milestone in my journey to master new technologies and deliver value in every project.
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
        {/* Certificates */}
      </Typography>
      <Grid container spacing={5}>
        {certificates.map((certificate) => (
          <Grid item key={certificate._id} xs={12} sm={6} md={4}>
            <Card
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
              {certificate.imageUrl && (
                <CardMedia
                  component="img"
                  height="180"
                  image={certificate.imageUrl}
                  alt={certificate.title}
                  sx={{ objectFit: 'cover', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, color: theme.palette.primary.main }}>
                  {certificate.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                  {certificate.issuer}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
                  Issued: {certificate.issueDate ? new Date(certificate.issueDate).toLocaleDateString() : ''}
                </Typography>
                <Box sx={{ mt: 2, mb: 1 }}>
                  {Array.isArray(certificate.skills) && certificate.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{ mr: 1, mb: 1, fontWeight: 600, background: theme.palette.mode === 'dark' ? '#23263a' : '#e0e7ef', color: theme.palette.primary.main }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
                {certificate.credentialUrl && (
                  <Button
                    size="small"
                    color="primary"
                    variant="outlined"
                    href={certificate.credentialUrl}
                    target="_blank"
                    sx={{ borderRadius: 8, fontWeight: 600 }}
                  >
                    View Certificate
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={6} gap={2}>
          <IconButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            sx={{
              color: theme.palette.primary.main,
              '&:disabled': {
                color: theme.palette.text.disabled
              }
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
            Page {currentPage} of {totalPages} ({totalItems} total certificates)
          </Typography>
          <IconButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            sx={{
              color: theme.palette.primary.main,
              '&:disabled': {
                color: theme.palette.text.disabled
              }
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Box>
      )}
    </Container>
  );
};

export default Certificates; 
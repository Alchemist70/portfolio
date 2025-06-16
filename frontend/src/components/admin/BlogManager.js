import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Chip,
  Alert,
  CircularProgress,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { api } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';

const BlogManager = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const { token } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    imageUrl: '',
    date: '',
    readTime: '',
    category: '',
    link: '',
    tags: '',
    featured: false
  });

  const categories = [
    'Technology',
    'Programming',
    'Web Development',
    'Data Science',
    'Machine Learning',
    'Career',
    'Personal'
  ];

  const fetchPosts = async () => {
    try {
      const response = await api.get('/blog');
      const data = response.data;
      setPosts(
        Array.isArray(data)
          ? data
          : data.items || data.data || []
      );
      setError('');
    } catch (err) {
      setError('Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOpenDialog = (post = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        title: post.title || '',
        slug: post.slug || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        imageUrl: post.imageUrl || '',
        date: post.date ? post.date.split('T')[0] : '',
        readTime: post.readTime || '',
        category: post.category || '',
        link: post.link || '',
        tags: Array.isArray(post.tags) ? post.tags.join(', ') : '',
        featured: post.featured || false
      });
    } else {
      setEditingPost(null);
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        imageUrl: '',
        date: '',
        readTime: '',
        category: '',
        link: '',
        tags: '',
        featured: false
      });
    }
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingPost(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData(prev => ({
      ...prev,
      tags
    }));
  };

  function generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      let tagsArray = [];
      if (Array.isArray(formData.tags)) {
        tagsArray = formData.tags;
      } else if (typeof formData.tags === 'string') {
        tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
      }
      const blogData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
        excerpt: formData.excerpt,
        content: formData.content,
        imageUrl: formData.imageUrl,
        date: formData.date,
        readTime: formData.readTime,
        category: formData.category,
        link: formData.link,
        tags: tagsArray,
        featured: formData.featured
      };
      console.log('About to send API request', blogData);
      if (editingPost) {
        await api.patch(`/blog/${editingPost._id}`, blogData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await api.post('/blog', blogData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      console.log('API request sent');
      handleCloseDialog();
      fetchPosts();
    } catch (err) {
      console.error('API error:', err);
      setError(err.response?.data?.message || 'Failed to save blog post');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await api.delete(`/blog/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        fetchPosts();
      } catch (err) {
        setError('Failed to delete blog post');
      }
    }
  };

  const postsArray = Array.isArray(posts) ? posts : [];

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenDialog()}
        >
          Add Blog Post
        </Button>
      </Box>

      <Grid container spacing={3}>
        {postsArray.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={post.imageUrl}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.excerpt}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.date ? new Date(post.date).toLocaleDateString() : ''} • {post.readTime}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Slug: {post.slug}
                </Typography>
                <Chip
                  label={post.category}
                  size="small"
                  sx={{ mr: 1, mb: 1 }}
                />
                <Box mt={1}>
                  {Array.isArray(post.tags) && post.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <IconButton
                    size="small"
                    onClick={() => handleOpenDialog(post)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDelete(post._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="md" fullWidth>
        <form onSubmit={handleSubmit}>
          <DialogTitle>
            {editingPost ? 'Edit Blog Post' : 'Add Blog Post'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={2}
              />
              <TextField
                fullWidth
                label="Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={6}
              />
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Slug"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                margin="normal"
                required
                helperText="Unique URL-friendly identifier (auto-generated from title if left blank)"
              />
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Read Time"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                margin="normal"
                required
                placeholder="e.g., 5 min read"
              />
              <FormControl fullWidth margin="normal">
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                  required
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                fullWidth
                label="Link"
                name="link"
                value={formData.link}
                onChange={handleChange}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Tags (comma-separated)"
                name="tags"
                value={formData.tags}
                onChange={handleTagsChange}
                margin="normal"
                required
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.featured}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      featured: e.target.checked
                    }))}
                    name="featured"
                  />
                }
                label="Featured"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={handleCloseDialog}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              {editingPost ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
};

export default BlogManager; 
import React, { useEffect, useState } from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { api } from "../services/api";
import {
  Box,
  Typography,
  Chip,
  CircularProgress,
  Alert,
  Paper,
  Button,
} from "@mui/material";

const BlogPostDetail = () => {
  const { slugOrId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Try fetching by slug first, then by id if not found
        let res = await api.get(`/blog/${slugOrId}`);
        setPost(res.data);
      } catch (err) {
        setError("Blog post not found.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slugOrId]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" py={8}>
        <CircularProgress />
      </Box>
    );
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!post) return <Alert severity="info">No blog post found.</Alert>;

  return (
    <Paper
      elevation={8}
      sx={{
        p: { xs: 3, md: 6 },
        maxWidth: 900,
        mx: "auto",
        mt: 6,
        borderRadius: 6,
        background: "linear-gradient(120deg, #23263a 0%, #00bcd4 100%)",
        color: "#fff",
        boxShadow: "0 8px 32px 0 rgba(60, 72, 88, 0.18)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          mb: 2,
          letterSpacing: 1,
          color: "#fff",
          textShadow: "0 2px 16px rgba(0,0,0,0.18)",
        }}
      >
        {post.title}
      </Typography>
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Chip
          label={post.category}
          color="secondary"
          sx={{
            fontWeight: 700,
            fontSize: "1rem",
            background: "#fff",
            color: "#1976d2",
          }}
        />
        <Typography variant="body1" sx={{ color: "#e0e0e0", fontWeight: 500 }}>
          {post.date ? new Date(post.date).toLocaleDateString() : ""} •{" "}
          {post.readTime}
        </Typography>
      </Box>
      {post.imageUrl && (
        <Box
          component="img"
          src={post.imageUrl}
          alt={post.title}
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 4,
            mb: 4,
            boxShadow: 3,
          }}
        />
      )}
      <Typography
        variant="body1"
        sx={{
          color: "#e0e0e0",
          fontSize: "1.2rem",
          mb: 4,
          lineHeight: 1.8,
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {post.content}
      </Typography>
      <Button
        component={RouterLink}
        to="/blog"
        variant="contained"
        sx={{
          borderRadius: 8,
          fontWeight: 700,
          background: "linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)",
          mt: 2,
        }}
      >
        Back to Blog
      </Button>
    </Paper>
  );
};

export default BlogPostDetail;

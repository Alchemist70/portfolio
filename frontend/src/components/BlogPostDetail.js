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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { TextField } from "@mui/material";

const BlogPostDetail = () => {
  const { slugOrId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Try fetching by slug first, then by id if not found
        let res = await api.get(`/blog/${slugOrId}`);
        setPost(res.data);
        setLikes(res.data.likes || 0);
        setLiked(
          res.data.likedBy &&
            res.data.likedBy.includes(localStorage.getItem("userId") || "guest")
        );
      } catch (err) {
        setError("Blog post not found.");
      } finally {
        setLoading(false);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await api.get(`/blog/${slugOrId}/comments`);
        setComments(res.data);
      } catch {}
    };
    const fetchUserCount = async () => {
      try {
        const res = await api.get("/auth/users/count");
        setUserCount(res.data.count);
      } catch {}
    };
    fetchPost();
    fetchComments();
    fetchUserCount();
  }, [slugOrId]);

  useEffect(() => {
    if (!localStorage.getItem("userId")) {
      localStorage.setItem(
        "userId",
        "user-" + Math.random().toString(36).substr(2, 9)
      );
    }
  }, []);

  const handleLike = async () => {
    const userId = localStorage.getItem("userId") || "guest";
    try {
      const res = await api.post(`/blog/${post._id}/like`, { userId });
      setLikes(res.data.likes);
      setLiked(res.data.liked);
    } catch {}
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!commentName.trim() || !commentText.trim()) return;
    try {
      const res = await api.post(`/blog/${post._id}/comment`, {
        name: commentName,
        text: commentText,
      });
      setComments([...comments, res.data]);
      setCommentName("");
      setCommentText("");
    } catch {}
  };

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
        <Box display="flex" alignItems="center" gap={1}>
          <ThumbUpIcon
            sx={{ color: liked ? "#00bcd4" : "#fff", cursor: "pointer" }}
            onClick={handleLike}
          />
          <Typography variant="body2" sx={{ color: "#fff", fontWeight: 700 }}>
            {likes}
          </Typography>
          <ChatBubbleOutlineIcon sx={{ color: "#fff", ml: 2 }} />
          <Typography variant="body2" sx={{ color: "#fff", fontWeight: 700 }}>
            {comments.length}
          </Typography>
        </Box>
        <Box ml="auto">
          <Typography variant="body2" sx={{ color: "#fff", fontWeight: 700 }}>
            Read By: {userCount}
          </Typography>
        </Box>
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
      <Typography
        variant="h4"
        sx={{ color: "#fff", fontWeight: 700, mt: 6, mb: 2 }}
      >
        Comments
      </Typography>
      <Box mb={4}>
        {comments.length === 0 && (
          <Typography sx={{ color: "#e0e0e0" }}>
            No comments yet. Be the first to comment!
          </Typography>
        )}
        {comments.map((c, i) => (
          <Paper
            key={i}
            sx={{
              p: 2,
              mb: 2,
              background: "rgba(255,255,255,0.10)",
              color: "#23263a",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 700, color: "23263a" }}
            >
              {c.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#23263a", fontSize: "1.08rem", fontWeight: 500 }}
            >
              {c.text}
            </Typography>
            <Typography variant="caption" sx={{ color: "#e0e0e0" }}>
              {new Date(c.date).toLocaleString()}
            </Typography>
          </Paper>
        ))}
        <Box
          component="form"
          onSubmit={handleAddComment}
          mt={2}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            label="Your Name"
            placeholder="Name"
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
            required
            sx={{ background: "#fff", borderRadius: 2 }}
            InputProps={{ style: { color: "#1976d2" } }}
          />
          <TextField
            label="Your Comment"
            placeholder="Write your comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
            multiline
            rows={3}
            sx={{ background: "#fff", borderRadius: 2 }}
            InputProps={{ style: { color: "#1976d2" } }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: 8,
              fontWeight: 700,
              background: "linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)",
            }}
          >
            Add Comment
          </Button>
        </Box>
      </Box>
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

import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Avatar, Container } from "@mui/material";
import Contact from "../components/Contact";
import profilePicture from "./profile_picture.jpg";

const Home = () => {
  const [photoUrl, setPhotoUrl] = useState(profilePicture);

  useEffect(() => {
    const storedPhoto = localStorage.getItem("adminPhoto");
    if (storedPhoto) {
      setPhotoUrl(storedPhoto);
    }
  }, []);

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        elevation={8}
        sx={{
          position: "relative",
          background: "linear-gradient(120deg, #1976d2 0%, #00bcd4 100%)",
          color: "#fff",
          mb: 6,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: { xs: "auto", md: "60vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: 8,
          borderRadius: 6,
          p: { xs: 3, md: 6 },
        }}
      >
        <Avatar
          src={photoUrl}
          alt="Profile Photo"
          sx={{
            width: 160,
            height: 160,
            mb: 3,
            boxShadow: 4,
            border: "5px solid #fff",
          }}
        />
        <Typography
          component="h1"
          variant="h2"
          color="inherit"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 800,
            letterSpacing: 2,
            textShadow: "0 2px 16px rgba(0,0,0,0.18)",
          }}
        >
          Abdulhadi Abbas Akanni
        </Typography>
        <Typography
          variant="h5"
          color="#e0e0e0"
          paragraph
          align="center"
          sx={{ mb: 2, fontWeight: 600 }}
        >
          Full Stack Developer | Machine Learning Enthusiast | Problem Solver
        </Typography>
        <Typography
          variant="body1"
          color="#e0e0e0"
          align="center"
          sx={{ maxWidth: 600, mx: "auto", fontSize: "1.15rem", opacity: 0.95 }}
        >
          Welcome to my professional portfolio. Explore my work, skills, and
          experience. Let's connect and build something great together!
        </Typography>
      </Paper>
      {/* Contact Section */}
      <Container maxWidth="md" sx={{ my: 8 }}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700, color: "primary.main", mb: 4 }}
        >
          {/* Contact Me */}
        </Typography>
        <Contact />
      </Container>
    </Box>
  );
};

export default Home;

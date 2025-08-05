import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Avatar, Container, Button, IconButton } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Contact from "../components/Contact";
import profilePicture from "./profile_picture.jpg";

const Home = () => {
  const [photoUrl, setPhotoUrl] = useState(profilePicture);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const words = ['Web Development', 'AI/ML', 'Programming'];

  useEffect(() => {
    const storedPhoto = localStorage.getItem("adminPhoto");
    if (storedPhoto) {
      setPhotoUrl(storedPhoto);
    }
    
    // Trigger page load animation after a short delay
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (isPageLoaded) {
      const currentWord = words[wordIndex];
      
      if (currentIndex < currentWord.length) {
        // Typing the current word
        const timeout = setTimeout(() => {
          setTypedText(currentWord.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 150); // Speed of typing

        return () => clearTimeout(timeout);
      } else {
        // Word completed, wait then move to next word or restart
        const timeout = setTimeout(() => {
          if (wordIndex < words.length - 1) {
            // Move to next word
            setWordIndex(wordIndex + 1);
            setCurrentIndex(0);
            setTypedText('');
          } else {
            // Restart from first word
            setWordIndex(0);
            setCurrentIndex(0);
            setTypedText('');
          }
        }, 2000); // Wait 2 seconds before next word

        return () => clearTimeout(timeout);
      }
    }
  }, [isPageLoaded, currentIndex, wordIndex, words]);

  return (
    <Box sx={{ 
      position: 'relative',
      '@keyframes blink': {
        '0%, 50%': { opacity: 1 },
        '51%, 100%': { opacity: 0 }
      }
    }}>


      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          color: "#fff",
          mb: 6,
          minHeight: { xs: "auto", md: "75vh" },
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
          p: { xs: 2, sm: 3, md: 6 },
          width: { xs: "100%", sm: "95%", md: "90%" },
          mx: "auto",
        }}
      >
        {/* Social Icons - Bottom Left Corner (Home Page Only) */}
        <Box sx={{ 
          position: 'absolute',
          left: { xs: '-100px', md: '-200px' }, 
          bottom: { xs: '-10px', md: '-20px' },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          zIndex: 1000
        }}>
          <IconButton
            href="https://github.com/yourusername"
            target="_blank"
            sx={{
              color: 'text.primary',
              fontSize: '1.5rem',
              '&:hover': {
                color: '#1976d2',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            sx={{
              color: 'text.primary',
              fontSize: '1.5rem',
              '&:hover': {
                color: '#1976d2',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="mailto:abdulhadiakanni@gmail.com"
            sx={{
              color: 'text.primary',
              fontSize: '1.5rem',
              '&:hover': {
                color: '#1976d2',
                transform: 'scale(1.1)',
              },
              transition: 'all 0.3s ease'
            }}
          >
            <EmailIcon />
          </IconButton>
        </Box>

        {/* Left-Right Layout Container */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: { xs: 'center', md: 'center' }, 
          justifyContent: 'space-between',
          gap: 6, 
          width: '100%',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Left Side - Text Content */}
          <Box sx={{ 
            flex: 0, 
            textAlign: { xs: 'center', md: 'left' }, 
            order: { xs: 2, md: 1 },
            zIndex: 2,
            pl: { xs: 2, md: 0 },
            pr: { xs: 2, md: 4 },
            opacity: isPageLoaded ? 1 : 0,
            transform: isPageLoaded ? 'translateY(0px)' : 'translateY(100vh)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            {/* Hello Text */}
            <Typography
              variant="h4"
              sx={{
                mb: 2,
                opacity: 0.9,
                fontWeight: 400,
                fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.8rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                color: 'text.primary'
              }}
            >
              Hello, It's Me
            </Typography>

            {/* Name */}
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 800,
                letterSpacing: 2,
                textShadow: "0 2px 16px rgba(0,0,0,0.18)",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
                lineHeight: 1.1,
                mb: 3,
                color: '#1976d2',
              }}
            >
              Abdulhadi Abbas Akanni
            </Typography>

            {/* Description */}
            <Typography
              variant="h5"
              color="text.secondary"
              paragraph
              sx={{
                mb: 4,
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                maxWidth: '500px',
                lineHeight: 1.4
              }}
            >
              I'm an AIML Engineer and Full Stack Developer who is passionate in{' '}
              <span style={{ color: '#1976d2', fontWeight: 700 }}>
                {typedText}
              </span>
              <span style={{ 
                display: 'inline-block',
                width: '2px',
                height: '1.5rem',
                backgroundColor: '#1976d2',
                marginLeft: '2px',
                animation: 'blink 1s infinite'
              }}></span>
            </Typography>

            {/* Buttons Container */}
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'flex-start' }
            }}>
              {/* About Button */}
              <Button
                variant="contained"
                component={RouterLink}
                to="/about"
                sx={{
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: '#1976d2',
                  color: '#fff',
                  textTransform: 'uppercase',
                  '&:hover': {
                    background: '#1565c0',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                About
              </Button>
              
              {/* View CV Button */}
              <Button
                variant="contained"
                href="/My-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: '25px',
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  background: '#1976d2',
                  color: '#fff',
                  textTransform: 'uppercase',
                  '&:hover': {
                    background: '#1565c0',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                View CV
              </Button>
            </Box>


          </Box>

          {/* Right Side - Profile Picture */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            order: { xs: 1, md: 2 },
            zIndex: 2,
            position: 'relative',
            flex: 1,
            ml: { xs: 0, md: 4 },
            opacity: isPageLoaded ? 1 : 0,
            transform: isPageLoaded ? 'translateX(0px)' : 'translateX(100vw)',
            transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}>
            <Box sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-40px',
                left: '-40px',
                right: '-40px',
                bottom: '-40px',
                background: 'radial-gradient(circle, rgba(33, 150, 243, 0.4) 0%, rgba(33, 150, 243, 0.2) 30%, rgba(33, 150, 243, 0.1) 60%, transparent 80%)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'pulse 3s infinite'
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '-20px',
                bottom: '-20px',
                background: 'radial-gradient(circle, rgba(33, 150, 243, 0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                zIndex: -1,
                animation: 'glow 2s infinite alternate'
              },
              '@keyframes pulse': {
                '0%, 100%': { 
                  transform: 'scale(1)',
                  opacity: 0.6
                },
                '50%': { 
                  transform: 'scale(1.15)',
                  opacity: 1
                }
              },
              '@keyframes glow': {
                '0%': { 
                  opacity: 0.3,
                  transform: 'scale(1)'
                },
                '100%': { 
                  opacity: 0.8,
                  transform: 'scale(1.05)'
                }
              }
            }}>
                                           <Avatar
                src={photoUrl}
                alt="Profile Photo"
                sx={{
                  width: { xs: 160, sm: 200, md: 300 },
                  height: { xs: 160, sm: 200, md: 300 },
                  boxShadow: '0 0 60px rgba(33, 150, 243, 0.7), 0 0 120px rgba(33, 150, 243, 0.4)',
                  border: '4px solid rgba(33, 150, 243, 0.9)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 0 80px rgba(33, 150, 243, 0.9), 0 0 160px rgba(33, 150, 243, 0.5)',
                    border: '4px solid rgba(33, 150, 243, 1)'
                  }
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

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

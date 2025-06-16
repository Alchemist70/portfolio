import { createTheme } from '@mui/material';

const commonTypography = {
  fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '2.7rem',
    fontWeight: 700,
    letterSpacing: 1.2,
  },
  h2: {
    fontSize: '2.2rem',
    fontWeight: 600,
  },
  h3: {
    fontSize: '1.8rem',
    fontWeight: 600,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  h5: {
    fontSize: '1.2rem',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  body1: {
    fontSize: '1.05rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.95rem',
    lineHeight: 1.5,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Deep blue
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#7c3aed', // Vibrant purple
      light: '#a78bfa',
      dark: '#4c1d95',
      contrastText: '#fff',
    },
    accent: {
      main: '#00bcd4', // Cyan accent
    },
    background: {
      default: '#f4f7fa',
      paper: '#ffffff',
    },
    text: {
      primary: '#23272f',
      secondary: '#4b5563',
      disabled: '#b0b8c1',
    },
    divider: '#e0e7ef',
  },
  shape: {
    borderRadius: 14,
  },
  typography: commonTypography,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
          color: '#23272f',
          borderRadius: 18,
          boxShadow: '0 4px 24px 0 rgba(60, 72, 88, 0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e7ef',
          color: '#1976d2',
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 2px 8px 0 rgba(60, 72, 88, 0.08)',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #1976d2 0%, #7c3aed 100%)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4', // Cyan
      light: '#5eead4',
      dark: '#0891b2',
      contrastText: '#fff',
    },
    secondary: {
      main: '#a78bfa', // Soft purple
      light: '#c4b5fd',
      dark: '#7c3aed',
      contrastText: '#fff',
    },
    accent: {
      main: '#f59e42', // Orange accent
    },
    background: {
      default: '#181c24', // Deep blue-gray, not black
      paper: '#23263a',
    },
    text: {
      primary: '#f3f4f6',
      secondary: '#b0b8c1',
      disabled: '#6b7280',
    },
    divider: '#31364a',
  },
  shape: {
    borderRadius: 14,
  },
  typography: commonTypography,
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #23263a 0%, #181c24 100%)',
          color: '#f3f4f6',
          borderRadius: 18,
          boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#31364a',
          color: '#00bcd4',
          fontWeight: 600,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.18)',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #00bcd4 0%, #7c3aed 100%)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #23263a 0%, #00bcd4 100%)',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#23263a',
          color: '#f3f4f6',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#f3f4f6',
        },
      },
    },
  },
}); 
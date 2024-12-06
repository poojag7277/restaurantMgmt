import { createTheme } from '@mui/material/styles';

const carmineBrightColors = {
  base: '#ffffff', // Pure white background
  surface: '#fff5f5', // Light surface with a soft pink tone
  overlay: '#ffeaea', // Very light overlay
  muted: '#cfcfcf', // Muted greys for subtle contrasts
  subtle: '#b3b3b3', // Lighter grey for secondary text
  text: '#2b2b2b', // Bright, dark text for excellent readability
  carmine: '#d72638', // Primary carmine red
  gold: '#f8b500', // Accent gold
  blush: '#f1959b', // Blush pink
  cream: '#fffaf0', // Soft cream tone for highlights
  highlightLow: '#fff0f0',
  highlightMed: '#ffe5e5',
  highlightHigh: '#ffd9d9',
};

const carmineBrightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: carmineBrightColors.base,
      paper: carmineBrightColors.surface,
    },
    primary: {
      main: carmineBrightColors.carmine,
    },
    secondary: {
      main: carmineBrightColors.gold,
    },
    error: {
      main: carmineBrightColors.blush,
    },
    warning: {
      main: carmineBrightColors.gold,
    },
    info: {
      main: carmineBrightColors.cream,
    },
    success: {
      main: carmineBrightColors.gold,
    },
    text: {
      primary: carmineBrightColors.text, // Brighter text for better contrast
      secondary: carmineBrightColors.subtle, // Lighter for less important info
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: carmineBrightColors.text,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
      color: carmineBrightColors.text,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.75rem',
      color: carmineBrightColors.text,
    },
    body1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      color: carmineBrightColors.text,
    },
    body2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 300,
      fontSize: '0.875rem',
      color: carmineBrightColors.subtle,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: carmineBrightColors.surface,
          color: carmineBrightColors.text,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          color: carmineBrightColors.text,
          '&:hover': {
            backgroundColor: carmineBrightColors.highlightLow,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        body {
          background-color: ${carmineBrightColors.base};
          color: ${carmineBrightColors.text};
        }
      `,
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: carmineBrightColors.cream,
          color: carmineBrightColors.text,
          boxShadow: `0 4px 8px 0 ${carmineBrightColors.highlightMed}`,
          borderRadius: '12px',
          border: `1px solid ${carmineBrightColors.overlay}`,
        },
      },
    },
  },
});

export default carmineBrightTheme;

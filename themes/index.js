import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingRight: 0,
          paddingLeft: 0,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // Add default styles for Typography components (h1, h2, h3, etc.)
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            marginBottom: '1rem', // Adds margin to all headings
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#A70003', // Example primary color
    },
    secondary: {
      main: '#ffa726', // Example secondary color
    },
  },
  breakpoints: {
    values: {
      xs: 0,      // Extra small devices (phones)
      sm: 600,    // Small devices (tablets)
      md: 960,    // Medium devices (larger tablets)
      lg: 1280,   // Large devices (laptops)
      xl: 1920,   // Extra large devices (large desktops)
      xxl: 2560,  // Extra extra large devices (large monitors)
    },
  },
  typography: {
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {
      fontWeight: 'bold',
    },
    h6: {},
    // You can also define styles for other typography elements here
    body1: {
      fontSize: '1rem', // Default font size for body text
      lineHeight: 1.5,  // Line height for readability
    },
    body2: {
      fontSize: '0.875rem', // Slightly smaller body text
    },
  },
  overrides: {
    // Global styles for HTML elements
    MuiCssBaseline: {
      styleOverrides: {
        p: {
          marginBottom: '1rem', // Adds margin below paragraphs
          fontSize: '1rem',     // Default font size for paragraphs
          color: "red",
        },
        img: {
          maxWidth: '100%',      // Ensures images are responsive
          height: 'auto',        // Maintains aspect ratio
        },
        ul: {
          paddingLeft: '20px',   // Adds padding to unordered lists
        },
        ol: {
          paddingLeft: '20px',   // Adds padding to ordered lists
        },
        a: {
          textDecoration: 'none', // Removes underline from links by default
          color: 'inherit',       // Inherit color from parent element
        },
      },
    },
  },
});

export default theme;

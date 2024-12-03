import { createTheme } from '@mui/material/styles';

const myCustomTheme = createTheme({
  palette: {
    primary: { main: '#ff6347' }, // Tomato color
    secondary: { main: '#333' },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default myCustomTheme;

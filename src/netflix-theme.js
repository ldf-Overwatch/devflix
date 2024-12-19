import { createTheme } from '@mui/material/styles';

const netflixTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#E50914' },
        secondary: { main: '#FFFFFF' },
        background: { default: '#111', paper: '#222' },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default netflixTheme;

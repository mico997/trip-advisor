import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme();

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
import React from 'react';
import { CssBaseline ,ThemeProvider, Box } from '@mui/material';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import carmineBrightTheme from './theme/carmine';
//import { ThemeProvider } from '@mui/material';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return(
    <ThemeProvider theme={carmineBrightTheme}>
       <CssBaseline />
    <Router>
  <Box display="flex" flexDirection="column" minHeight="100vh">
    < Navbar/>
    <Box  component="main" flexGrow={1} py={3}>
    </Box>
    < Footer/>
  </Box> 
    </Router>
    </ThemeProvider>

) ;
};
  


export default App;

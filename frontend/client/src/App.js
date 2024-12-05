import React from 'react';
import { CssBaseline , Box } from '@mui/material';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import tomatoTheme from './theme/tomatoTheme';
import ThemeProvider from '@mui/material/styles';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return(
    <Router>
  <Box display="flex" flexDirection="column" minHeight="100vh">
    < Navbar/>
    < Footer/>
  </Box> 
    </Router>

) ;
};
  


export default App;

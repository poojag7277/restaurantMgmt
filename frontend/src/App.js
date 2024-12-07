import React from 'react';
import { CssBaseline ,ThemeProvider, Box } from '@mui/material';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import carmineBrightTheme from './theme/carmine';
//import { ThemeProvider } from '@mui/material';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import CreateRest from './components/CreateRest';
import ShowItemsList from './components/ShowItemsList';


const App = () => {
  return(
    <ThemeProvider theme={carmineBrightTheme}>
       <CssBaseline />
    <Router>
  <Box display="flex" flexDirection="column" minHeight="100vh">
    < Navbar/>
    <Box  component="main" flexGrow={1} py={3}>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/create-rest' element={<CreateRest />} />
        <Route path='/items-list' element={<ShowItemsList />} />
      </Routes>
    </Box>
    < Footer/>
  </Box> 
    </Router>
    </ThemeProvider>

) ;
};
  


export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import myCustomTheme from './theme/myTheme'; // Optional: Custom Material-UI theme

import Header from './components/Header';
import Footer from './components/Footer';
import FeaturedDishes from './components/FeaturedDishes';
import Menu from './components/Menu';
import ReserveTable from './components/ReserveTable';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs'; // Add an "About Us" page if needed

const App = () => {
  return (
    <ThemeProvider theme={myCustomTheme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Header /> {/* Navbar or Header */}
          <Box component="main" flexGrow={1} py={3}>
            <Routes>
              <Route path="/" element={<FeaturedDishes />} /> {/* Home/Featured Dishes */}
              <Route path="/menu" element={<Menu />} />
              <Route path="/reserve" element={<ReserveTable />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

// function App() {
//   return (
//     <div className="App">

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import NoteIcon from '@mui/icons-material/Note'; // Import Notes Icon
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Open Menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        
        {/* Clickable Project Title (Navigates to Home) */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          Restaurant Management
        </Typography>

        {/* Right Side: Notes Dropdown, GitHub Icon */}
        <div>
          {/* Notes Dropdown Button with Icon */}
          <Button
            variant="outlined"
            color="primary"
            onClick={handleMenuOpen}
            startIcon={<NoteIcon />} // Adds the Notes Icon
            sx={{ marginRight: 2 }}
          >
            Notes
          </Button>
          
          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem 
              component="a" 
              href="https://drive.google.com/file/d/1-9siTtRCwNN2EbKDbv-H3YNF3I7URVcr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </MenuItem>

            <MenuItem 
              component="a" 
              href="https://docs.google.com/document/d/1s44S0y2zjZRpBVytlP2hvrt02AFLC1Mer94stNcws6U/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </MenuItem>
          </Menu>

          {/* GitHub Icon */}
          <IconButton
            color="primary"
            component="a"
            href="https://github.com/poojag7277/restaurantMgmt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

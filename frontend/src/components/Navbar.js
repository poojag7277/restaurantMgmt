import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
            textDecoration: 'none', // No underline even when clicked
            '&:hover': { textDecoration: 'none' },
          }}
        >
          Restaurant Management
        </Typography>

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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

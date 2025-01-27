import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Restaurants', path: '/show-restaurant' },
    { title: 'Add Restaurant', path: '/create-rest' },
  ];

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={2}>
      <Toolbar>
        {/* Project Title */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'primary.main',
            fontWeight: 'bold',
          }}
        >
          Restaurant Management
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              component={RouterLink}
              to={item.path}
              color={location.pathname === item.path ? 'secondary' : 'primary'}
              sx={{
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                textTransform: 'none',
              }}
            >
              {item.title}
            </Button>
          ))}
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
        </Box>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                component={RouterLink}
                to={item.path}
                onClick={handleMenuClose}
                selected={location.pathname === item.path}
              >
                {item.title}
              </MenuItem>
            ))}
            <MenuItem
              component="a"
              href="https://github.com/poojag7277/restaurantMgmt"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMenuClose}
            >
              GitHub
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

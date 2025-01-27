import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemsCard = ({ restaurant }) => {
  return (
    <Link
      to={`/show-restaurant/${restaurant._id}`} // The entire card is clickable
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s, box-shadow 0.2s',
          borderRadius: 2,
          boxShadow: 3,
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6,
          },
          cursor: 'pointer', // Indicates clickability
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1661953124283-76d0a8436b87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Items"
          style={{ height: 200, objectFit: 'cover', width: '100%' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div" color="primary" gutterBottom>
            {restaurant.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {restaurant.phonenumber}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1 }}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {restaurant.location}
          </Typography>
        </CardContent>
        <Box sx={{ p: 2, mt: 'auto' }}>
          {/* Button removed, as the whole card is now clickable */}
        </Box>
      </Card>
    </Link>
  );
};

export default ItemsCard;

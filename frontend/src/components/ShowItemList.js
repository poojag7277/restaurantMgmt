import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Card,
  CardContent,
} from '@mui/material';

import ItemsCard from './ItemsCard';

function ShowItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/api/restaurant`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setItems(res.data);
        } else {
          console.error('Unexpected data format:', res.data);
          setError('Unexpected data format received from the server.');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching items:', err);
        setError('Failed to fetch items. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h3" component="h1" color="primary" fontWeight="bold">
          Restaurants List
        </Typography>
        <Button
          component={Link}
          to="/create-rest"
          color="primary"
          variant="contained"
          size="large"
        >
          Add New Restaurant
        </Button>
      </Box>

      {/* Loading/ Error State */}
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <Typography variant="h6" color="error">
            {error}
          </Typography>
        </Box>
      ) : (
        <Box>
          {/* Sub-header */}
          <Card sx={{ mb: 4, p: 2, bgcolor: 'primary.light', color: 'white' }}>
            <Typography variant="h6" align="center">
              Browse the list of restaurants below and click on a card to view details.
            </Typography>
          </Card>

          {/* Items Grid */}
          <Grid container spacing={4}>
            {items.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="h6" color="text.secondary" align="center">
                  No restaurants found!
                </Typography>
              </Grid>
            ) : (
              items.map((restaurant, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <ItemsCard restaurant={restaurant} />
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      )}
    </Container>
  );
}

export default ShowItemList;

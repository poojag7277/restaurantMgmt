// src/components/ShowBookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import ItemsCard from './ItemsCard';

function ShowItemList() {
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
    .get("https://5000-poojag7277-restaurantmg-1115xqmkyhv.ws-us117.gitpod.io/api/restaurant")
//      .get(`/api/items`)
      .then((res) => {
        setData(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log('Error from ShowItemList ->', err);
        setLoading(false); // Set loading to false even on error
      });
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" color="primary" gutterBottom>
        Items List
      </Typography>

      <Button
        component={Link}
        to="/show-restaurant"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add data
      </Button>

      {loading ? (
        // Show a loading spinner while data is being fetched
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {items.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="h6" color="text.secondary">
                No items found!
              </Typography>
            </Grid>
          ) : (
            items.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ItemsCard item={item} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}

export default ShowItemList;
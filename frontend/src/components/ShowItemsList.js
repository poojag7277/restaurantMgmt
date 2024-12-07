// src/components/ShowBookList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';

import ItemsCard from './ItemsCard';

function ShowItemsList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios
      .get(`/api/restaurant`)
      .then((res) => {
        setItems(res.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log('Error from ShowItemsList ->', err);
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
        to="/create-rest"
        color="primary"
        variant="contained"
        sx={{ mb: 4 }}
      >
        Add new item
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
                No Items found
              </Typography>
            </Grid>
          ) : (
            items.map((restaurant, index) => (
              <Grid items xs={12} sm={6} md={4} key={index}>
                <ItemsCard items={items} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Container>
  );
}

export default ShowItemsList;
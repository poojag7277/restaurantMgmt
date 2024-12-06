import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
            <Typography variant="h2" component="h1" color="primary" gutterBottom>
                1st type
            </Typography>
            <Typography variant="h5" gutterBottom>
                2nd type
            </Typography>
            <Box>
                <Button>
                    books diplayed
                </Button>
            </Box>
        </Container>
    )
}
export default HomePage;
import React from 'react';
import { Box , Typography } from '@mui/material';

const Footer = () => (
    <Box
        component="footer"
        sx={{
            bgcolor:'background.paper',
            color:'text.secondary',
            py: 4,
            width: '100%',
            textAlign: 'center',
            borderTop: `1px solid `,
        }}
    >
        <Typography variant ="h6" gutterBottom>
            hope you had a good day
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
         © {new Date().getFullYear()} Done | All Rights Reserved
         </Typography>
    </Box>
);

export default Footer;
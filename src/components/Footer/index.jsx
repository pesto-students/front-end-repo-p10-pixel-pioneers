import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Box, Grid, Stack, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Replace these with your own social media URLs
const socialMediaLinks = {
    facebook: '#',
    twitter: '#',
    instagram: '#',
};

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: '#2C4C54',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
                position: "sticky",
                bottom: "0",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h6" style={{ color: "#fff" }} gutterBottom>
                            <RouterLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
                                Proximity Pods
                            </ RouterLink>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stack alignItems={"center"}>
                            <Link href="/about" style={{ color: "#fff" }} display="block">About Us</Link>
                            <Link href="/contact" style={{ color: "#fff" }} display="block">Contact Us</Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" style={{ color: "#fff" }} align="center" sx={{ pt: 2 }}>
                            © 2024 Proximity Pods Co. All rights reserved.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;

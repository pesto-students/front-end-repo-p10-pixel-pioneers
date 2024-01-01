import * as React from 'react';
import { Box, Grid, Link, Typography, Container, IconButton } from '@mui/material';
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
                bgcolor: '#1976d2',
                color: 'text.secondary',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth={false}>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" style={{ color: "#fff" }} gutterBottom>
                            Proximity Pods
                        </Typography>
                        {/* Add your logo component or image here */}
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" style={{ color: "#fff" }} gutterBottom>
                            PRODUCT
                        </Typography>
                        <Link href="#" style={{ color: "#fff" }} display="block">Features</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Integrations</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Pricing</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">FAQ</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" style={{ color: "#fff" }} gutterBottom>
                            COMPANY
                        </Typography>
                        <Link href="#" style={{color:"#fff"}} display="block">About Us</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Careers</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Privacy Policy</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Terms of Service</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" style={{ color: "#fff" }} gutterBottom>
                            DEVELOPERS
                        </Typography>
                        <Link href="#" style={{color:"#fff"}} display="block">Public API</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Documentation</Link>
                        <Link href="#" style={{color:"#fff"}} display="block">Guides</Link>
                    </Grid>
                    <Grid item xs={6} sm={3} md={2}>
                        <Typography variant="subtitle1" style={{ color: "#fff" }} gutterBottom>
                            SOCIAL MEDIA
                        </Typography>
                        <IconButton aria-label="Facebook" style={{color:"#fff"}} component="a" href={socialMediaLinks.facebook}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" style={{color:"#fff"}} component="a" href={socialMediaLinks.twitter}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" style={{color:"#fff"}} component="a" href={socialMediaLinks.instagram}>
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="body2" style={{color:"#fff"}} align="center" sx={{ pt: 4 }}>
                    © 2024 Company Co. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;

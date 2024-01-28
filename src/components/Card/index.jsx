import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import {
    grey,
    lightGreen,
    lime,
    green,
    cyan,
    teal,
    red,
    purple,
    deepPurple,
    indigo,
    blue,
    orange,
    pink,
    amber,
    brown,
    blueGrey,
    deepOrange
  } from "@mui/material/colors";

const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 0
};

const CustomCard = () => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={4} xl={3} sx={{ width: "100%", border: "1px solid black", borderRadius:"13px" }}>
            <Card sx={CARD_PROPERTY}>
                <CardHeader
                    sx={{ p: 3 }}
                    avatar={
                        <Avatar
                            sx={{ bgcolor: purple[500], width: 50, height: 50 }}
                            aria-label="recipe"
                            src="https://randomuser.me/api/portraits/women/47.jpg"
                        >
                            E
                        </Avatar>
                    }
                    title={
                        <Link
                            href="#"
                            variant="body1"
                            color="black"
                            underline="none"
                            sx={{ fontWeight: "medium" }}
                        >
                            Emma Johnson
                        </Link>
                    }
                    subheader="September 14, 2016"
                />
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="body1" color="black" sx={{ mb: 3 }}>
                        This impressive paella is a perfect party dish and a fun meal
                        to cook together with your guests. Add 1 cup of frozen..
                    </Typography>
                    <Button variant="body1">Read more</Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CustomCard;
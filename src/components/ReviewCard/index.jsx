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
import { makeStyles } from "@material-ui/core/styles";

import { purple } from "@mui/material/colors";

const LINES_TO_SHOW = 5;

const useStyles = makeStyles({
  container: {
    maxWidth: 500,
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical",
  },
});

const CARD_PROPERTY = {
    borderRadius: 3,
    boxShadow: 2,
    height: 270,
    maxWidth: "100%",
};

{/**
    <Link
        href="#"
        variant="body1"
        color="black"
        underline="none"
        sx={{ fontWeight: "medium" }}
    >
        Emma Johnson
        </Link>
*/}

const ReviewCard = ({name, description, date, avatar}) => {
    const classes = useStyles();

    return (
        <Card sx={CARD_PROPERTY}>
            <CardHeader
                sx={{ p: 3 }}
                avatar={
                    <Avatar
                        sx={{ bgcolor: purple[500], width: 50, height: 50 }}
                        aria-label="recipe"
                        // src="https://randomuser.me/api/portraits/women/47.jpg"
                        src= {avatar || "https://randomuser.me/api/?nat=IN"}
                    >
                        E
                    </Avatar>
                }
                title={
                    <Typography
                        href="#"
                        variant="body1"
                        color="black"
                        underline="none"
                        sx={{ fontWeight: "medium" }}
                    >
                       { name || "Emma Johnson" }
                    </Typography>
                }
                subheader={ date || "September 14, 2016"}
            />
            <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" color="black" sx={{ mb: 3 }} className={classes.multiLineEllipsis}>
                    {
                        description ||

                        `This impressive paella is a perfect party dish and a fun meal
                        to cook together with your guests. Add 1 cup of frozen..`
                    }
                    
                </Typography>
                {/* <Button variant="body1">Read more</Button> */}
            </CardContent>
        </Card>
    )
}

export default ReviewCard;
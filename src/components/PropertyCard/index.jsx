import React from "react";
import { Link } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import galleryImage1 from "../../Assets/gallery-1.jpeg";

const LINES_TO_SHOW = 4;

const useStyles = makeStyles({
  container: {
    maxWidth: 500
  },
  multiLineEllipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": LINES_TO_SHOW,
    "-webkit-box-orient": "vertical"
  }
});

const PropertyCard = ({ propertyDetails }) => {
  
  console.log(`Property Details:-`, propertyDetails)
  const classes = useStyles();
  const propertyImage = propertyDetails.images.data[0].attributes.url;


  const handleShare = (event) => {
    event.preventDefault();
  };

  return (
    <Box margin={2}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to={`/property-details/${propertyDetails.id}`}>
          <CardMedia
            sx={{ height: 140 }}
            image={propertyImage || galleryImage1}
            title="green iguana"
          />
          <CardContent className={classes.container}>
            <Typography gutterBottom variant="h5" component="div">
              {propertyDetails.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" className={classes.multiLineEllipsis}>
              {propertyDetails.description}
            </Typography>
          </CardContent>
          <CardActions >
            <Button size="small" onClick={handleShare}>Share</Button>
            <Button size="small" >Learn More</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default PropertyCard
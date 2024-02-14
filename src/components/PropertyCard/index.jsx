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
import Stack from '@mui/material/Stack';

import Star from "../../components/Star";

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

  const classes = useStyles();
  const propertyImage = propertyDetails.images.data[0].attributes.url;


  return (
    <Box margin={2}>
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardActionArea component={Link} to={`/property-details/${propertyDetails.name.toLowerCase().replace(" ", "-")}`}> */}
        <CardActionArea component={Link} to={`/property-details/${propertyDetails.id}`}>
          <CardMedia
            sx={{ height: 140 }}
            image={propertyImage || galleryImage1}
            title={propertyDetails.name}
          />
          <CardContent className={classes.container}>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Box>
                <Typography gutterBottom variant="h5" component="div">
                  {propertyDetails.name}
                </Typography>
              </Box>
              <Box marginRight={2}>
                <Star marked={true} rating={propertyDetails.rating} />
              </Box>
            </Stack>
            <Typography variant="body2" color="text.secondary" className={classes.multiLineEllipsis}>
              {propertyDetails.description}
            </Typography>
            <Box marginTop={2}>
              {(propertyDetails.cost) ? `₹ ${propertyDetails.cost.toLocaleString("en-IN")}` : "Not Available"}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default PropertyCard
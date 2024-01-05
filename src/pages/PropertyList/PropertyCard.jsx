import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    height: 200,
    width: 400,
  },
  //   chip: {
  //     margin: theme.spacing(0.5),
  //   },
}));

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  let { amenities } = property;
  //console.log(property);
  //console.log(amenities);

  let baseurl = "https://strapi-dqt5.onrender.com".concat(
    property.images.data[0].attributes.url
  );

  let getAminities = () => {
    if (!amenities || Object.keys(amenities).length === 0) {
      return [];
    }
    const enabledAmenities = Object.entries(amenities)
      .filter(([key, value]) => value && value.enabled === "true")
      .reduce((acc, [key]) => {
        acc[key] = amenities[key];
        return acc;
      }, {});
    // console.log(Object.keys(enabledAmenities));
    // return enabledAmenities;
    return Object.keys(enabledAmenities);
  };

  let aminitiesList = getAminities();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={property.images.data[0].attributes.url}
        title={property.name}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {property.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Location:{property.pincode},{property.city}
        </Typography>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Facilities:
            </Typography>
          </Grid>
          {aminitiesList.map((aminity) => (
            <Grid item key={aminity}>
              <Chip label={aminity} className={classes.chip} />
            </Grid>
          ))}
        </Grid>
        <Typography
          component="p"
          color="textSecondary"
          style={{ fontSize: "smaller" }}
        >
          starting from
        </Typography>

        <Typography variant="body1">
          <span style={{ fontWeight: "bold" }}>{property.cost} </span>
          <span style={{ fontSize: "smaller" }}>/desk/month</span>{" "}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => navigate(`/property-details/${property.id}`)}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

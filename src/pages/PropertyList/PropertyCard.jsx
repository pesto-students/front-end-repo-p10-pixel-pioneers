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

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: "auto",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    height: 200,
  },
  //   chip: {
  //     margin: theme.spacing(0.5),
  //   },
}));

const PropertyCard = ({ property }) => {
  const classes = useStyles();
  //console.log(property);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={property.photo}
        title={property.name}
      />
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {property.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Location: {property.location}
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
          {property.facilities.map((facility, index) => (
            <Grid item key={index}>
              <Chip label={facility} className={classes.chip} />
            </Grid>
          ))}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Enquire
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

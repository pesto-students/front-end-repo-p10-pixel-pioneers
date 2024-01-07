import { Card, CardContent, Typography, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
}));

function TestimonialCard({ name, profile, image, rating, description }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt={name} src={image} className={classes.avatar} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h6">{name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {profile}
              </Typography>
              <div className={classes.rating}>
                <Rating value={rating} precision={0.5} readOnly />
                <Typography variant="body2" color="textSecondary">
                  {rating}
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary">
                {description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default TestimonialCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Card, CardContent } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";

export const useStyles = makeStyles((theme) => ({
  container: {
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: "auto",
    marginLeft: "auto",

    // Full width for (xs, extra-small: 0px or larger) and (sm, small: 600px or larger)
    [theme.breakpoints.up("md")]: {
      // medium: 960px or larger
      width: 920,
    },
    [theme.breakpoints.up("lg")]: {
      // large: 1280px or larger
      width: 1170,
    },
    [theme.breakpoints.up("xl")]: {
      // extra-large: 1920px or larger
      width: 1366,
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabContent: {
    marginTop: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function UserDetailTab() {
  const classes = useStyles();
  const userData = JSON.parse(localStorage.user);
  console.log(userData);
  return (
    <div className={classes.container}>
      <Typography variant="h5" gutterBottom>
        {/* User Profile */}
      </Typography>
      {/* Replace these fields with user data */}
      <Typography>First Name: {userData.firstName}</Typography>
      <Typography>Last Name: {userData.lastName}</Typography>
      <Typography>Username: {userData.username}</Typography>
      <Typography>Email: {userData.email}</Typography>
      <Typography>Phone Number: {userData.phoneNumber}</Typography>
      {/* <Typography>City: {}</Typography> */}
    </div>
  );
}

function PastBookingTab() {
  const classes = useStyles();

  const bookings = [
    {
      location: "Location 1",
      date: "2023-01-15",
    },
    {
      location: "Location 2",
      date: "2023-02-20",
    },
    // Add more booking data as needed
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h5" gutterBottom>
        Your Tickets
      </Typography>
      {bookings.map((booking, index) => (
        <Card key={index} className={classes.card}>
          <CardContent>
            <Typography variant="h6">Location: {booking.location}</Typography>
            <Typography>Date: {booking.date}</Typography>
            <Button variant="outlined" color="primary">
              View
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function RegisteredSpacesDetails() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* <Card
        sx={{ maxWidth: 345 }}
        md={{ maxWidth: 345 }}
        lg={{ maxWidth: 345 }}
      >
        <CardMedia
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw0HU9l24XCjY5zQ0rl3Rjis&ust=1704635976991000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCMD9_oD2yIMDFQAAAAAdAAAAABAE"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      {/* </Card> */}
      No properties regstered
    </div>
  );
}

export default function UserProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="User Profile" />
        <Tab label="Past Booking" />
        <Tab label="Registered spaces" />
        {/* Add more tabs here if needed */}
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabContent}>
        <UserDetailTab />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabContent}>
        <PastBookingTab />
      </TabPanel>

      <TabPanel value={value} index={2} className={classes.tabContent}>
        <RegisteredSpacesDetails />
      </TabPanel>
      {/* Add more TabPanel components for additional tabs */}
    </div>
  );
}

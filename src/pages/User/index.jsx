import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Card, CardContent } from "@material-ui/core";
import { getUserPropertyList } from "../../api/property";
import "./index.css";
import PropertyCard from "../../components/PropertyCard";
import { Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const useStyles = makeStyles((theme) => ({
  customUser: {
    margin: "auto",
  },
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
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          // display: "flex",
          // justifyContent: "center",
          margin: "auto",
          width: "50%",
          // alignItems: "center",
          // height: "100vh", // Use '100vh' for full viewport height
        }}
      >
        {/* <div className={classes.container}> */}
        {/* <Typography variant="h5" gutterBottom> */}
        {/* User Profile */}
        {/* </Typography> */}
        {/* Replace these fields with user data */}

        <Avatar
          alt="Profile Picture"
          src="/path/to/your/image.jpg"
          // sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Typography variant="h6" component="div">
          First Name: {userData.firstName}
        </Typography>
        <Typography variant="h6" component="div">
          Last Name: {userData.lastName}
        </Typography>
        <Typography variant="h6" component="div">
          Username: {userData.username}
        </Typography>
        <Typography variant="h6" component="div">
          Email: {userData.email}
        </Typography>
        <Typography variant="h6" component="div">
          Phone Number: {userData.phoneNumber}
        </Typography>
        {/* <Typography>City: {}</Typography> */}
        {/* </div> */}
      </Box>
    </>
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
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      let res = await getUserPropertyList(JSON.parse(localStorage.user).id);
      if (res.success) {
        setProperties(res.data);
        setLoading(false);
      } else {
        setError(res.data.message);
        setLoading(false);
      }
    })();
  }, []);
  return (
    <div>
      {/* 1. there are no properties */}
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          margin={10}
        >
          <CircularProgress />{" "}
        </Box>
      ) : (
        ""
      )}
      {!properties ? <h1>No Properties Registered</h1> : ""}

      {/* 2. there are properties */}
      <Stack
        margin={2}
        direction={{ xs: "column", md: "row" }}
        gap={1}
        justifyContent={"center"}
        alignContent={"center"}
        flexWrap={"wrap"}
      >
        {properties.length &&
          properties.map((property) => (
            <PropertyCard
              propertyDetails={property}
              key={property.name + "hello"}
            />
          ))}
      </Stack>
      {/* there is error */}
      {hasError ? <div>error</div> : ""}
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

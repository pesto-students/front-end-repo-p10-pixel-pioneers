import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        {/* User Profile */}
      </Typography>
      {/* Replace these fields with user data */}
      <Typography>First Name: John</Typography>
      <Typography>Last Name: Doe</Typography>
      <Typography>Username: johndoe123</Typography>
      <Typography>Email: johndoe@example.com</Typography>
      <Typography>Phone Number: +1234567890</Typography>
      <Typography>City: New York</Typography>
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
    <div>
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
      {/* Add more TabPanel components for additional tabs */}
    </div>
  );
}

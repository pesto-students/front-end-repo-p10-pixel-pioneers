// // import { Tabs } from "@mui/material/Tabs";
// import React from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { Tab } from "@mui/material";
// import { Tabs } from "@mui/material";
// // import {Tab} from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";

// const AntTabs = withStyles({
//   root: {
//     borderBottom: "1px solid #e8e8e8",
//   },
//   indicator: {
//     backgroundColor: "#1890ff",
//   },
// })(Tabs);

// const AntTab = withStyles((theme) => ({
//   root: {
//     textTransform: "none",
//     minWidth: 72,
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(4),
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:hover": {
//       color: "#40a9ff",
//       opacity: 1,
//     },
//     "&$selected": {
//       color: "#1890ff",
//       fontWeight: theme.typography.fontWeightMedium,
//     },
//     "&:focus": {
//       color: "#40a9ff",
//     },
//   },
//   selected: {},
// }))((props) => <Tab disableRipple {...props} />);

// const StyledTabs = withStyles({
//   indicator: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     "& > span": {
//       maxWidth: 40,
//       width: "100%",
//       backgroundColor: "#635ee7",
//     },
//   },
// })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

// const StyledTab = withStyles((theme) => ({
//   root: {
//     textTransform: "none",
//     color: "#fff",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     "&:focus": {
//       opacity: 1,
//     },
//   },
// }))((props) => <Tab disableRipple {...props} />);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   padding: {
//     padding: theme.spacing(3),
//   },
//   demo1: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   demo2: {
//     backgroundColor: "#2e1534",
//   },
// }));

// function User() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//       <div className={classes.demo1}>
//         <AntTabs value={value} onChange={handleChange} aria-label="ant example">
//           <AntTab label="Tab 1" />
//           <AntTab label="Tab 2" />
//           <AntTab label="Tab 3" />
//         </AntTabs>
//         <Typography className={classes.padding} />
//       </div>
//       <div className={classes.demo2}>
//         <StyledTabs
//           value={value}
//           onChange={handleChange}
//           aria-label="styled tabs example"
//         >
//           <StyledTab label="Workflows" />
//           <StyledTab label="Datasets" />
//           <StyledTab label="Connections" />
//         </StyledTabs>
//         <Typography className={classes.padding} />
//       </div>
//     </div>
//   );
// }

// export default User;

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
        User Profile
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

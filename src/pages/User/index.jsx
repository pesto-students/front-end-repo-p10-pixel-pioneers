import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Link from '@mui/material/Link';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import { getUserPropertyList } from "../../api/property";
import UserPropertyCard from "../../components/UserPropertyCard";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function UserDetailTab() {
    const userData = JSON.parse(localStorage.user);

    return (
        <>
            <Box
                sx={{
                    margin: "auto",
                    width: "50%",
                }}
            >
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
            </Box>
        </>
    );
}

function RegisteredSpaces() {
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
                setError(prev => true)
                setHasError(res.data.message);
                setLoading(false);
            }
        })();
    }, []);

    {/* Loader */ }
    if (loading) {
        return <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
            }}
            margin={10}
        >
            <CircularProgress />
        </Box>
    }

    {/* Error Component */ }
    if (error) {
        return <div>error</div>
    }

    return (
        <Stack
            margin={2}
            direction={{ xs: "column", md: "row" }}
            gap={1}
            justifyContent={"center"}
            alignContent={"center"}
            flexWrap={"wrap"}
        >
            {(properties.length !== 0) ?
                properties.map((property, propertyIndex) => (
                    <UserPropertyCard
                        propertyDetails={property}
                        key={`property-${propertyIndex}`}
                    />
                )) : (
                    <h1>No Spaces Registered</h1>
                )

            }
        </Stack>
    );
}

const UserProfileTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
            <Tab label="User Profile" {...a11yProps(0)} />
            <Tab label="Past Booking" {...a11yProps(1)} />
            <Tab label="Registered Spaces" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <UserDetailTab/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <RegisteredSpaces />
        </CustomTabPanel>
      </Box>
    )
}

export default UserProfileTabs
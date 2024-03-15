import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from "@mui/material/CircularProgress";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Link from '@mui/material/Link';
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import dayjs from "dayjs";

// Icon
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

//API
import { getUserPropertyList } from "../../api/property";
// import { getUserBookings } from "../../api/booking";

import UserPropertyCard from "../../components/UserPropertyCard";
import UserInfo from "../../components/UserInfo";

const CARD_PROPERTY = {
    width: 345,
    borderRadius: 3,
    boxShadow: 0,
};

const getDate = (date) => {
    return dayjs(date).format("MMM DD, YY");
};

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
    // User Info
    const user = JSON.parse(localStorage.user);
    return (
        <>
            <UserInfo user={user} />
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
          <h1>No Spaces Booked</h1>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <RegisteredSpaces />
        </CustomTabPanel>
      </Box>
    )
}

export default UserProfileTabs
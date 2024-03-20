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
import Divider from '@mui/material/Divider';

import dayjs from "dayjs";

// Icon
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

//API
import { getUserPropertyList } from "../../api/property";
import { getUserBookings } from "../../api/booking";

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

function oldBookingCard({ booking }) {
    return (
        <Box margin={2}>
            <Card sx={CARD_PROPERTY} >
                <Box padding={2}>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="body1" fontWeight={"600"}>
                            {booking.fullName}
                        </Typography>
                        <Typography variant="body1" fontWeight={"600"}>
                            {`₹ ${booking.amount.toLocaleString("en-IN")}`}
                        </Typography>
                    </Stack>

                    {/** Booked On */}
                    <Stack gap={5} direction={"row"} justifyContent={"space-between"} alignContent={"center"} alignItems={"center"}>
                        <Typography variant="body2" fontWeight={"600"}>
                            Booked On
                        </Typography>
                        <Stack gap={1 / 2} direction={"row"} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"}>
                            <CalendarMonthIcon />
                            <Typography variant="body2">
                                {getDate(booking.bookedOn)}
                            </Typography>
                        </Stack>
                    </ Stack>

                    <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
                        {/** Booking Start */}
                        <Typography variant="body2" fontWeight={"600"}>
                            Check In
                        </Typography>
                        <Stack gap={1 / 2} direction={"row"} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"}>
                            <CalendarMonthIcon />
                            <Typography variant="body2">
                                {getDate(booking.start)}
                            </Typography>
                        </ Stack>
                    </ Stack>
                    <Stack direction={"row"} gap={2} justifyContent={"space-between"}>
                        {/** Booking End */}
                        <Typography variant="body2" fontWeight={"600"}>
                            Check Out
                        </Typography>
                        <Stack gap={1 / 2} direction={"row"} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"}>
                            <CalendarMonthIcon />
                            <Typography variant="body2">
                                {getDate(booking.end)}
                            </Typography>
                        </ Stack>
                    </Stack>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="body2">
                            {booking.email}
                        </Typography>
                        <Typography variant="body2">
                            {booking.phoneNumber}
                        </Typography>
                    </Stack>
                </Box>
            </Card>
        </Box>
    )
};

function BookingCard({ booking }) {
    return (
        <Box margin={2}>
            <Card sx={CARD_PROPERTY} >
                <Box padding={2}>
                    <Box>
                        <Typography variant="body1" fontWeight={"bold"} gutterBottom>Booking Details</Typography>
                    </Box>
                    <Divider />
                    <Box marginTop={1}>
                        <Typography variant="body2" fontWeight={"bold"} gutterBottom>{booking.propertyDetails.name}</Typography>
                        <Typography variant="body2" color="darkslategray" gutterBottom>{booking.propertyDetails.address}</Typography>
                    </Box>
                    <Divider />
                    <Box marginTop={1}>
                        {/** Booked On */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Booked On</Typography>
                            <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} alignItems={"stretch"}>
                                <CalendarMonthIcon fontSize="small" />
                                <Typography variant="body2" gutterBottom sx={{width: "75px", textAlign: "right"}}>{getDate(booking.bookedOn)}</Typography>
                            </Stack>
                        </Stack>

                        {/** Check-In */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Check-In</Typography>
                            <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} alignItems={"stretch"}>
                                <CalendarMonthIcon fontSize="small" />
                                <Typography variant="body2" gutterBottom sx={{width: "75px", textAlign: "right"}}>{getDate(booking.start)}</Typography>
                            </Stack>
                        </Stack>

                        {/** Check-Out */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Check-Out</Typography>
                            <Stack direction={"row"} justifyContent={"space-between"} alignContent={"center"} alignItems={"stretch"}>
                                <CalendarMonthIcon fontSize="small" />
                                <Typography variant="body2" gutterBottom sx={{width: "75px", textAlign: "right"}}>{getDate(booking.end)}</Typography>
                            </Stack>
                        </Stack>

                    </Box>
                    <Divider />
                    <Box marginTop={1}>
                        {/* <Typography variant="body2" fontWeight={"bold"} gutterBottom>User</Typography> */}
                        {/** User Name*/}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Booking for</Typography>
                            <Typography variant="body2" gutterBottom>{booking.fullName}</Typography>
                        </Stack>
                        {/** User Email */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Email</Typography>
                            <Typography variant="body2" gutterBottom>{booking.email}</Typography>
                        </Stack>
                        {/** User Phone Number */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Phone Number</Typography>
                            <Typography variant="body2" gutterBottom>{booking.phoneNumber}</Typography>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box marginTop={1}>
                        {/** Seats */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Total Seats</Typography>
                            <Typography variant="body2" fontWeight={"500"} gutterBottom>{booking.totalSeats}</Typography>
                        </Stack>
                        {/** Amount */}
                        <Stack direction={"row"} justifyContent={"space-between"}>
                            <Typography variant="body2" fontWeight={"bold"} gutterBottom>Amount</Typography>
                            <Typography variant="body2" fontWeight={"500"} gutterBottom><span style={{ color: "black", fontWeight: "bold" }}>₹</span>{` ${booking.amount.toLocaleString("en-IN")}`}</Typography>
                        </Stack>
                    </Box>
                </Box>
            </Card>
        </Box>
    )
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

function BookedSpaces() {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");
    const [hasError, setHasError] = useState(false);
    const [loading, setLoading] = useState(false);
    // User Info
    const user = JSON.parse(localStorage.user);
    useEffect(() => {
        setLoading(true);
        (async () => {
            let bookingResponse = await getUserBookings(user.id);
            if (bookingResponse.success) {
                setBookings(prev => bookingResponse.data);
                setLoading(false);
            } else {
                setError(prev => true)
                setHasError(bookingResponse.message);
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
            margin={3}
            direction={{ xs: "column", md: "row" }}
            gap={1}
            justifyContent={"center"}
            alignContent={"center"}
            flexWrap={"wrap"}
        >

            {/* <Typography variant="h5" gutterBottom>
                Your Bookings
            </Typography> */}
            {(bookings.length !== 0) ?
                bookings.map((booking, index) => (
                    <BookingCard booking={booking} key={`booking-${index}`} />
                ))
                : (loading) ? (<Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                    }}
                    margin={10}
                >
                    <CircularProgress />
                </Box>
                ) : (<h1>No Bookings Found</h1>)
            }
        </ Stack>
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
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Your Bookings" {...a11yProps(1)} />
                    <Tab label="Registered Spaces" {...a11yProps(2)} />
                </Tabs>
            </Box>
            {/* User Info */}
            <CustomTabPanel value={value} index={0}>
                <UserDetailTab />
            </CustomTabPanel>
            {/* User Bookings */}
            <CustomTabPanel value={value} index={1}>
                <BookedSpaces />
            </CustomTabPanel>
            {/* Spaces Registered By User */}
            <CustomTabPanel value={value} index={2}>
                <RegisteredSpaces />
            </CustomTabPanel>
        </Box>
    )
}

export default UserProfileTabs
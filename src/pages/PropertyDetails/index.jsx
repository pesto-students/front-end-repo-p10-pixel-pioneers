import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../../api/property";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';

import PropertyCarousel from "../../components/PropertyCarousel";
import Title from "../../components/Title";
import Map from "../../components/Map";
import Star from "../../components/Star";
import BookingForm from "../../components/BookingForm"

import dialogBackground from "../../Assets/dialog-background.jpg"

// Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from '@mui/icons-material/Cancel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

const capitaliseFirstAlphabet = (text) => {
    const words = text.split(" ");
    const capitalisedWords = words.map((word, wordIndex) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    });

    return capitalisedWords.join(" ");
};

const BookingFormDialog = ({ open, handleClose, propertyDetails }) => {
    const propertyImage = propertyDetails.images.data[0].attributes?.url;

    const [bookingInitiated, setBookingInitiated] = useState(false);
    const [bookingSuccessful, setBookingSuccessful] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({});

    const handleBooking = (payload) => {
        console.log(payload);
        setBookingInitiated(true);
        setBookingDetails(prev => payload.data)
        if (payload.success) {
            setBookingSuccessful(true);
        }
    }

    // if (bookingInitiated) {
    //     return (
    //         <Stack justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
    //             <CheckCircleOutlineIcon
    //                 color={"success"}
    //                 sx={{ fontSize: "xxx-large" }}
    //             />
    //             <Typography variant="h5" fontWeight={"bold"} margin={1}>
    //                 Payment Success
    //             </Typography>
    //             <Typography variant="body1" margin={1}>
    //                 Yor payment of <strong>{`${bookingDetails.amount}`}</strong> was successfully completed
    //             </Typography>
    //             <Button variant="contained" sx={{ backgroundColor: "black" }} >Done </ Button>
    //         </Stack>
    //     )
    // }

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
        /*
        PaperProps={{
            style: {
                backgroundImage: `url(${dialogBackground})`,
                backgroundSize: "contain"
            }
        }}
        */
        >
            <Stack margin={1} direction={"row"} justifyContent={"flex-end"}>
                <Button
                    variant="text"
                    aria-label="close"
                    onClick={handleClose}
                    style={{ maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px' }}
                >
                    <CloseIcon color="action" />
                </Button>
            </Stack>
            <Box
                margin={2}
                sx={{
                    marginTop: { xs: 0, sm: 2 },
                    marginLeft: { xs: 0, sm: 6 },
                }}>
                <Title text={propertyDetails.name} textAlign={"start"} />
            </Box>


            {/**Initial Dialog */}
            < Grid container>
                <Grid item xs={12} sm={6}>
                    <Box
                        sx={{
                            marginLeft: { xs: 0, sm: 6 },
                            marginTop: { xs: 0, sm: 10 },
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}>
                        <PropertyCarousel images={propertyDetails.images.data} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    {
                        (bookingInitiated)
                            ? (
                                (bookingSuccessful)
                                ?(
                                    <Stack marginTop={{ xs: 1, sm: 18 }} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                    <CheckCircleOutlineIcon
                                        color={"success"}
                                        sx={{ fontSize: "xxx-large" }}
                                    />
                                    <Typography variant="h5" fontWeight={"bold"} margin={1}>
                                        Payment Success
                                    </Typography>
                                    <Typography variant="body1" margin={1} textAlign={"center"}>
                                        Your payment of <strong>{`${bookingDetails.amount}`}</strong>  for <strong>{`${propertyDetails.name}`}</strong> was successfully completed
                                    </Typography>
                                    <Button variant="contained" sx={{ backgroundColor: "black" }} onClick={handleClose} >Done </ Button>
                                </Stack>
                                )
                                :(
                                    <Stack marginTop={{ xs: 1, sm: 18 }} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                    <CancelIcon
                                        color={"error"}
                                        sx={{ fontSize: "xxx-large" }}
                                    />
                                    <Typography variant="h5" fontWeight={"bold"} margin={1}>
                                        Payment Failure
                                    </Typography>
                                    <Typography variant="body1" margin={1} textAlign={"center"}>
                                        Unable to book <strong>{`${propertyDetails.name}`}</strong>
                                    </Typography>
                                    <Button variant="contained" color={"error"} onClick={handleClose}>Done</ Button>
                                </Stack>
                                )
                               
                            ) : (
                                <Box margin={2}>
                                    <BookingForm propertyDetails={propertyDetails} handleBooking={handleBooking} />
                                </Box>
                            )
                    }
                </Grid>
            </Grid>



        </Dialog >
    )
}

const PropertyDetails = () => {
    const { propertyID, propertyName } = useParams();
    // const name = capitaliseFirstAlphabet(propertyName.replace("-", " "));
    const [loading, setLoading] = useState(false);
    const [propertyDetails, setPropertyDetails] = useState({});
    const [error, setError] = useState("");
    const [hasError, setHasError] = useState(false);
    const [openEnquiryModal, setOpenEnquiryModal] = useState(false);

    const [openBookingFormDialog, setOpenBookingFormDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenBookingFormDialog(true);
    };

    const handleClose = () => {
        setOpenBookingFormDialog(false);
    };

    const fetchData = async () => {
        let res = await getProperty(propertyID);
        if (res.success) {
            setPropertyDetails(res.data);
        } else {
            setHasError((prev) => true);
            setError(res.message);
        }
    };

    useEffect(() => {
        setLoading((prev) => true);
        (async () => {
            await fetchData();
            setLoading((prev) => false);
        })();


        return () => { };
    }, []);

    if (loading) {
        return (
            <>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        height: "50vh",
                    }}
                    margin={10}
                >
                    <CircularProgress />
                </Box>
            </>
        );
    }
    return (
        <>
            <Box sx={{
                marginLeft: { xs: 2, sm: 5, md: 15, lg: 15, xl: 15 },
                marginRight: { xs: 2, sm: 5, md: 15, lg: 15, xl: 15 },
            }}
                marginTop={10}
                marginBottom={5}
            >
                {
                    (Object.keys(propertyDetails).length > 1) &&
                    (
                        <>
                            {/* Building Name */}
                            <Stack direction={"row"} gap={4} alignItems={"center"}>
                                <Title text={propertyDetails.name} />
                                <Star marked={true} rating={propertyDetails.rating} />
                            </Stack>

                            <Stack marginTop={2} marginBottom={1} direction={{ xs: "row", sm: "row" }} gap={1}>
                                <Button variant="contained" size="small" onClick={handleClickOpen} sx={{ backgroundColor: "#2C4C54" }} disabled={(!localStorage.user)?true: false}>Book now</Button>
                                <Button component={Link} to={"/contact"} variant="outlined" size="small" sx={{ color: "#2C4C54", borderColor: "#2C4C54" }}>Contact Us</Button>
                            </Stack>

                            {/* Property Images */}
                            <PropertyCarousel images={propertyDetails.images.data} />

                            {/* Description, Get in Touch*/}
                            <Grid container alignItems="flex-start" spacing={{ xs: 2, md: 3 }}>

                                <Grid item>
                                    <Box >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'text.primary',
                                            }}
                                            style={{
                                                fontWeight: '600',
                                            }}
                                        >
                                            {propertyDetails.title}
                                        </Typography>
                                        <Typography
                                            component='p'
                                            marginTop={1}
                                            sx={{
                                                typography: { sm: 'body1', xs: 'body2' },
                                                color: 'text.primary'
                                            }}
                                            style={{
                                                fontWeight: '400',
                                            }}
                                        >
                                            {propertyDetails.description}
                                        </Typography>
                                    </Box>

                                </Grid>

                                {/* Amenities */}
                                <Grid item>
                                    <Box>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: 'text.primary',
                                            }}
                                            style={{
                                                fontWeight: '600',
                                            }}
                                            marginBottom={1}
                                        >
                                            Amenities at {propertyDetails.name}
                                        </Typography>
                                        <Grid container columns={12}>
                                            {
                                                Object.keys(propertyDetails.amenities).map((amenity, amenityIndex) => {
                                                    return (
                                                        <Grid marginTop={1 / 2} item key={`amenity-${amenityIndex}`} xs={12} sm={6}>
                                                            <Stack gap={4} direction={"row"} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"}>
                                                                <Icon fontSize="small">{propertyDetails.amenities[amenity].icon || "open_in_new_icon"}</Icon>
                                                                <Typography variant="body1">
                                                                    {amenity}
                                                                </Typography>
                                                            </ Stack>
                                                        </Grid>
                                                    )
                                                })
                                            }
                                        </Grid>
                                    </Box>
                                </Grid>

                            </Grid>

                            {/*Property Map Location */}
                            <Box marginTop={2}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.primary',
                                    }}
                                    style={{
                                        fontWeight: '600',
                                    }}
                                >
                                    Location
                                </Typography>
                                <Stack direction={"row"} gap={1 / 4} alignItems={"center"}>
                                    <LocationOnIcon fontSize="small" color="primary" />
                                    <Typography
                                        component='p'
                                        marginTop={1}
                                        marginBottom={1}
                                        sx={{
                                            typography: { sm: 'body1', xs: 'body2' },
                                            fontWeight: '100',
                                        }}
                                    >
                                        {propertyDetails.address}
                                    </Typography>
                                </Stack>
                                {/* Property Map */}
                                <Map
                                    center={[propertyDetails.latitude, propertyDetails.longitude]}
                                    name={propertyDetails.name}
                                    address={propertyDetails.address}
                                    city={propertyDetails.city}
                                    country={propertyDetails.country}
                                    image={propertyDetails.images.data[0].attributes.url}
                                />
                            </Box>
                            <BookingFormDialog open={openBookingFormDialog} handleClose={handleClose} propertyDetails={propertyDetails} />
                        </>
                    )
                }
            </Box>

        </>
    )
}

export default PropertyDetails;
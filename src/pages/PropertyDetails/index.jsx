import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../../api/property";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CircularProgress from "@mui/material/CircularProgress";
import Icon from '@mui/material/Icon';

import PropertyCarousel from "../../components/PropertyCarousel";
import Title from "../../components/Title";
import Map from "../../components/Map";
import Star from "../../components/Star";

// Icons
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const capitaliseFirstAlphabet = (text) => {
    const words = text.split(" ");
    const capitalisedWords = words.map((word, wordIndex) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    });

    return capitalisedWords.join(" ");
};

const PropertyDetails = () => {
    const { propertyID, propertyName } = useParams();
    // const name = capitaliseFirstAlphabet(propertyName.replace("-", " "));
    const [loading, setLoading] = useState(false);
    const [propertyDetails, setPropertyDetails] = useState({});
    const [error, setError] = useState("");
    const [hasError, setHasError] = useState(false);
    const [openEnquiryModal, setOpenEnquiryModal] = useState(false);

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
                marginLeft: { xs: 5, sm: 5, md: 15, lg: 15, xl: 15 },
                marginRight: { xs: 5, sm: 5, md: 15, lg: 15, xl: 15 },
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
                            {/* Building City and Pincode */}

                            <Stack gap={1 / 2} direction={"row"} marginTop={3 / 2} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"}>
                                <LocationOnIcon fontSize="small" color="primary" />
                                <Typography
                                    sx={{
                                        typography: { sm: 'body1', xs: 'body2' },
                                        fontWeight: '100',
                                    }}
                                >
                                    {propertyDetails.city}, {propertyDetails.pincode}
                                </Typography>
                            </Stack>
                            {/* Google Map Link */}
                            {/* <Box>
                                <Link href={`https://www.google.com/maps/search/?api=1&query=${propertyDetails.latitude},${propertyDetails.longitude}`} target="_blank" variant="body2">
                                    <Stack direction={"row"} gap={.2} alignItems={"center"}>
                                        Get directions
                                        <OpenInNewIcon sx={{ fontSize: 17 }} />
                                    </Stack>
                                </Link>
                            </Box> */}

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
                                            Amenities
                                        </Typography>
                                        <Grid container columns={12}>
                                            {
                                                Object.keys(propertyDetails.amenities).map((amenity, amenityIndex) => {
                                                    return (
                                                        <Grid marginTop={1 / 2} item key={`amenity-${amenityIndex}`} xs={6}>
                                                            <Stack gap={1} direction={"row"} justifyContent={"flex-start"} alignContent={"center"} alignItems={"center"}>
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
                                    address={propertyDetails.address}
                                    city={propertyDetails.city}
                                    country={propertyDetails.country}
                                />
                            </Box>
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default PropertyDetails;
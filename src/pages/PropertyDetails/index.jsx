import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../../api/property";

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';

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
        (async () => {
            await fetchData();
        })();
    }, []);

    return (
        <>
            <Box margin={2.5} marginTop={9}>
                {
                    (Object.keys(propertyDetails).length > 1) &&
                    (
                        <>
                            {/* Building Name */}
                            <Stack direction={"row"} gap={4} alignItems={"center"}>
                                <Title text={propertyDetails.name} />
                                <Star marked={true} rating={propertyDetails.rating} />
                            </Stack>
                            {/* Building Address */}
                            <Stack direction={"row"} gap={1} alignItems={"center"}>
                                <LocationOnIcon color="primary" />
                                <Box>
                                    <Typography
                                        component='p'
                                        marginTop={1.5}
                                        sx={{
                                            typography: { sm: 'body1', xs: 'body2' },
                                            fontWeight: '100',
                                        }}
                                    >
                                        {propertyDetails.address}
                                    </Typography>
                                    {/* Google Map Link */}
                                    <Link href={`https://www.google.com/maps/search/?api=1&query=${propertyDetails.latitude},${propertyDetails.longitude}`} target="_blank" variant="body2">
                                        <Stack direction={"row"} gap={.2} alignItems={"center"}>
                                            Get directions
                                            <OpenInNewIcon sx={{ fontSize: 17 }} />
                                        </Stack>
                                    </Link>

                                </Box>
                            </Stack>



                            {/* Property Images */}
                            <PropertyCarousel images={propertyDetails.images.data} />

                            {/* Description, Get in Touch*/}
                            <Grid container alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 8, lg: 12, xl: 12 }}>

                                <Grid item xs={4} sm={4} md={4} lg={6} xl={6}>
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
                                            marginTop={2}
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

                                <Grid item xs={4} sm={4} md={4} lg={6} xl={6}>
                                    <Box>
                                        TODO: Get in Touch Form
                                    </Box>
                                </Grid>

                            </Grid>



                            {/*Property Map Location */}
                            <Stack className="map" margin={4} direction={"row"} justifyContent={"center"}>
                                <Map
                                    center={[propertyDetails.latitude, propertyDetails.longitude]}
                                    address={propertyDetails.address}
                                    city={propertyDetails.city}
                                    country={propertyDetails.country}
                                />
                            </Stack>
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default PropertyDetails;
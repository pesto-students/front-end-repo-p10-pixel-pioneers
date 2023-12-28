import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProperty } from "../../api/property";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
// import { Icon } from '@mui/material';
import * as Muicon from "@mui/icons-material";

// ICONS
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocalParkingRoundedIcon from '@mui/icons-material/LocalParkingRounded';
import SignalWifiStatusbar4BarRoundedIcon from '@mui/icons-material/SignalWifiStatusbar4BarRounded';
import RestaurantMenuRoundedIcon from '@mui/icons-material/RestaurantMenuRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';

import { Carousel } from "../../components/Carousel";

let data = [
    {
        "src": "http://localhost:1337/uploads/A_Ax_WWIN_NESCO_IT_PARK_3_f18451f330.jpg",
        "alt": "Image 1 for carousel"
    },
    {
        "src": "http://localhost:1337/uploads/A_Ax_WWIN_NESCO_IT_PARK_1_1_abe94bdadd.jpg",
        "alt": "Image 2 for carousel"
    },
];

const amenities = [
    {
        parking: "LocalParking",
        title: "Parking",
    },
    {
        wifi: "SignalWifiStatusbar4Bar",
        title: "Wifi",
    },
    {
        canteen: "RestaurantMenu",
        title: "Canteen",
    },
    {
        conference: "MeetingRoom",
        title: "Conferencing facilities",
    },
    {
        print: "Print",
        title: "Parking",
    },
    {
        security: "AdminPanelSettings",
        title: "24/7 security",
    },
]



function PropertyDetails() {
    let { propertyID } = useParams();
    const [propertyDetails, setPropertyDetails] = useState({});
    const [error, setError] = useState("");
    const [hasError, setHasError] = useState(false);
    // const Icon = Muicon["LocalParking"];
    const fetchData = async () => {
        let res = await getProperty(propertyID);
        console.log(`Property Details:-`, res.data.name);
        if (res.success) {
            setPropertyDetails(res.data);
        } else {
            setHasError(prev => true);
            setError(res.message);
        }
    };

    useEffect(() => {
        (async () => {
            await fetchData();
        })()
    }, []);

    return (
        (hasError === false) ? (
            <>
                <Typography sx={{ mb: 1 }} style={{ fontSize: "3rem" }} component="h1" variant="h4" color="text.primary">
                    {propertyDetails.name}
                </Typography>
                <Typography sx={{ mb: .1 }} component="h2" variant="h5" color="text.secondary">
                    {propertyDetails.address}
                </Typography>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                >
                    Get Directions
                    <OpenInNewIcon sx={{ fontSize: 15 }} />
                </Link>
                <Carousel data={data} />

                <Stack spacing={2} style={{ width: "50vw" }}>
                    <Typography component="h4" variant="h5" color="text.primary">
                        {propertyDetails.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {propertyDetails.description}
                    </Typography>
                </Stack>
                <Grid container marginTop={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ width: "50vw" }}>
                    <Grid item xs={12}>
                        <Typography component="h4" variant="h5" color="text.primary">
                            Amenities
                        </Typography>
                    </Grid>
                    {
                        amenities.map(amenity => {
                            let amenityName = Object.keys(amenity)[0];
                            const Icon = Muicon[`${amenity[amenityName]}`]
                            return (
                                <Grid key={amenityName} item xs={6}>
                                    <Stack direction="row" spacing={2} alignItems="center" alignContent="center">
                                    <Box marginTop={2} display="flex" alignItems={"center"} justifyContent={"center"} style={{ backgroundColor: "#f3f6f9", width: "60px", height: "60px", borderRadius: "30px" }}>
                                        <Icon />
                                    </Box>
                                    <Typography component="h4" variant="h5" color="text.primary">
                                        {amenity.title}
                                    </Typography>
                                    </Stack>
                                </Grid>

                            )
                        })
                    }
                </Grid>
            </>
        ) : (
            <>
                {error}
            </>
        )

    )
}

export default PropertyDetails;
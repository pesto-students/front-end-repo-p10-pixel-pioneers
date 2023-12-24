import { useEffect, useState } from "react";
import { getProperty } from "../../api/property";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Icon } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
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
]

function PropertyDetails() {

    const [propertyDetails, setPropertyDetails] = useState({});
    const [error, setError] = useState("");
    const [hasError, setHasError] = useState(false);

    const fetchData = async () => {
        let res = await getProperty(10);
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
                <Typography sx={{ mb: 1 }} style={{fontSize:"3rem"}} component="h1" variant="h4" color="text.primary">
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
                    <OpenInNewIcon sx={{fontSize:15}}/>
                </Link>
                    <Carousel data={data}/>
            </>
        ) : (
            <>
                {error}
            </>
        )

    )
}

export default PropertyDetails;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../../api/property";

import Box from '@mui/material/Box';

import PropertyCarousel from "../../components/PropertyCarousel";
import Title from "../../components/Title";
import Map from "../../components/Map";

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
        console.log(`Property Details:-`, res.data);
        if (res.success) {
            console.log(`IMAGE:-`, res.data.images);
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
                            <Title text={propertyDetails.name} />
                            {/* right side */}
                            <PropertyCarousel images={propertyDetails.images.data}/>
                            <div className="map">
                                <Map
                                    center={[propertyDetails.latitude, propertyDetails.longitude]}
                                    address={propertyDetails.address}
                                    city={propertyDetails.city}
                                    country={propertyDetails.country}
                                />
                            </div>
                        </>
                    )
                }
            </Box>
        </>
    )
}

export default PropertyDetails;
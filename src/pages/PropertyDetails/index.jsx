import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperty } from "../../api/property";

import Box from '@mui/material/Box';

import Title from "../../components/Title";

const capitaliseFirstAlphabet = (text) => {
    const words = text.split(" ");
    const capitalisedWords = words.map((word, wordIndex) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1);
    });

    return capitalisedWords.join(" ");
};

const PropertyDetails = () => {
    const { propertyID, propertyName } = useParams();
    const name = capitaliseFirstAlphabet(propertyName.replace("-", " "));

    const [propertyDetails, setPropertyDetails] = useState({});

    return (
        <>
            <Box margin={2.5} marginTop={9}>
                <Title text={name} />
            </Box>
        </>
    )
}

export default PropertyDetails;
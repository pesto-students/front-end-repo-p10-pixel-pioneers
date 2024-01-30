import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import PropertyCard from "../../components/PropertyCard";
import Filters from "../../components/Filters";

import { propertyList } from "../../api/property";

const PropertyList2 = () => {

    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState({
        city: "All",
        sort: "none"
    });
    const [properties, setProperties] = useState([]);
    const [error, setError] = useState("");

    const fetchData = async (filter) => {

        const response = await propertyList(filter);

        if (response.success) {
            setProperties(response.data);
        } else {
            setError(response.message);
        }

    };

    useEffect(() => {

        setLoading(prev => true);
        setProperties([]);
        (async function () {
            await fetchData(filters);
        })();
        setLoading(prev => false);

    }, [filters]);

    if (loading) {
        return (
            <>
                <Box sx={{ display: 'flex', justifyContent: "center", alignContent: "center" }} margin={10}>
                    <CircularProgress />
                </Box>
            </>
        )
    }

    if (properties.length === 0) {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Property List 2</h1>
                <Filters handleFilter={setFilters} />
                <Box sx={{ display: 'flex', justifyContent: "center", alignContent: "center" }} margin={10}>
                    <CircularProgress />
                </Box>
            </>
        )
    }

    return (

        <>
            <h1 style={{ textAlign: "center" }}>Property List 2</h1>
            <Filters handleFilter={setFilters} />

            {/* {PropertyCards} */}
            <Stack margin={3} direction={{ xs: "column", md: "row" }} gap={1} justifyContent={"center"} alignContent={"center"} flexWrap={"wrap"}>
                {
                    properties.map((property, propertyIndex) => {
                        console.log(`:-`, property)
                        return (
                            <PropertyCard key={`property-card-${propertyIndex}`} propertyDetails={property} />
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default PropertyList2;
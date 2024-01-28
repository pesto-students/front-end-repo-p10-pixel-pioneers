import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import PropertyCard from "../../components/PropertyCard";
import Filters from "../../components/Filters";

const PropertyList2 = () => {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Property List 2</h1>
            <Filters />
            {/* {PropertyCards} */}
            <Stack margin={3} direction={{xs:"column", md: "row"}} gap={1} justifyContent={"center"} alignContent={"center"} flexWrap={"wrap"}>
                {
                    Array(16).fill(true).map((item, index) => (
                        <PropertyCard key={`property-card-${index}`} margin={3} />
                    ))
                }
            </Stack>
        </>
    )
}

export default PropertyList2;
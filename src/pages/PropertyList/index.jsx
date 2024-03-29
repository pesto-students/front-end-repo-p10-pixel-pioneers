import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import PropertyCard from "../../components/PropertyCard";
import Filters from "../../components/Filters";

import { propertyList } from "../../api/property";

const PropertyList = () => {
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    city: "All",
    sort: "Low to High",
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
    setLoading((prev) => true);
    setProperties([]);
    (async function () {
      await fetchData(filters);
      setLoading((prev) => false);
    })();

  }, [filters]);

  if (loading) {
    return (
      <>
        <Box marginTop={11}>
          <Filters city={filters.city} sort={filters.sort} handleFilter={setFilters} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
            margin={10}
          >
            <CircularProgress />
          </Box>
        </Box>
      </>
    );
  }

  if (properties.length === 0) {
    return (
      <Box marginTop={11}>
        <Filters city={filters.city} sort={filters.sort} handleFilter={setFilters} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "50vh"
          }}
          margin={10}
        >
          <CircularProgress />
        </Box>
      </Box>

    );
  }

  return (
    <div style={{ marginTop: "90px" }}>
      {/* <h1 style={{ textAlign: "center" }}>Property List</h1> */}
      <Filters city={filters.city} sort={filters.sort} handleFilter={setFilters} />

      {/* {PropertyCards} */}
      <Stack
        margin={3}
        direction={{ xs: "column", md: "row" }}
        gap={1}
        justifyContent={"center"}
        alignContent={"center"}
        flexWrap={"wrap"}
      >
        {properties.map((property, propertyIndex) => {
          return (
            <PropertyCard
              key={`property-card-${propertyIndex}`}
              propertyDetails={property}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default PropertyList;

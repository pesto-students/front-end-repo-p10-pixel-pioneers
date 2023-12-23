import PropertyCard from "./PropertyCard";
import { propertyList } from "../../api/property";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState({
    city: "",
    price: { min: 0, max: 30000 },
    sort: "desc",
  });

  const fetchData = async (filter) => {
    //console.log("fetchData callled-----");
    const response = await propertyList(filter);
    //console.log("------Response ", response);
    if (response.success) {
      setProperties(response.data);
    } else {
      setError(response.message);
    }
  };

  useEffect(() => {
    (async function () {
      await fetchData(filter);
    })();

    //console.log("useEffect fired");
  }, [filter]);
  let handleFilter = (filter) => {
    console.log("In Index.js---", filter);
    setFilter(filter);
  };
  //console.log("State--", filter);
  return (
    <Box m={2}>
      <div className="homepage">
        <div className="">
          <Sidebar handleFilterChange={handleFilter} />
        </div>

        <div className="card-section">
          {/* <PropertyCard property={propertyData} /> */}
          {/* <PropertyCard property={propertyData} /> */}
          {properties.length !== 0
            ? properties.map((property) => {
                // console.log(property);
                return <PropertyCard property={property} key={property.name} />;
              })
            : "No Data Found"}
        </div>
      </div>
    </Box>
  );
}

export default PropertyList;

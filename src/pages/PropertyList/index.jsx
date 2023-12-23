import PropertyCard from "./PropertyCard";
import { propertyList } from "../../api/property";
import Sidebar from "./Sidebar";
import "./Sidebar.css";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

const propertyData = {
  name: "Luxury Villa",
  location: "Beverly Hills, CA",
  photo:
    "https://ctfassets.imgix.net/vh7r69kgcki3/1yD4Tmm83DWGhp6UzGId5z/baa2c10600153343d3b72c24762ba571/Web_150DPI-20201217_WeWork_Km_5_Av_Las_Palmas_-_Medellin_007.jpg",
  facilities: ["Swimming Pool", "Gym", "Spa", "Garden"],
};

function PropertyList() {
  const [filter, setFilter] = useState({
    city: "",
    price: { min: 0, max: 30000 },
    sort: "desc",
  });

  const fetchData = async (filter) => {
    console.log("fetchData callled-----");
    const response = await propertyList(filter);
    console.log("------Response ", response);
  };

  useEffect(() => {
    (async function () {
      let res = await fetchData(filter);
      console.log(res);
    })();

    console.log("useEffect fired");
  }, [filter]);
  let handleFilter = (filter) => {
    console.log("In Index.js---", filter);
    setFilter(filter);
  };
  console.log("State--", filter);
  return (
    <Box m={2}>
      <div className="homepage">
        <div className="">
          <Sidebar handleFilterChange={handleFilter} />
        </div>

        <div className="card-section">
          {" "}
          <PropertyCard property={propertyData} />
          <PropertyCard property={propertyData} />
        </div>
      </div>
    </Box>
  );
}

export default PropertyList;

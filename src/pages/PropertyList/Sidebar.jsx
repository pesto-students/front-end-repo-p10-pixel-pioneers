import { useState } from "react";
// import { Checkbox } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Sidebar({ handleFilterChange }) {
  const [price, setPrice] = useState("All");
  const [location, setLocation] = useState("");
  const [sortvalue, setSortValue] = useState("Price High to Low");
  const [priceRange, setpriceRange] = useState({ min: 0, max: 30000 });

  const getPriceRange = (price) => {
    let priceObject = {};
    switch (price) {
      case "Less than 1000":
        priceObject = { min: 0, max: 10000 };
        break;
      case "10000 to 15000":
        priceObject = { min: 10000, max: 15000 };
        break;
      case "15000+":
        priceObject = { min: 15000, max: 30000 };
        break;
      case "All":
        priceObject = { min: 0, max: 30000 };
        break;
      default:
        priceObject = { min: 0, max: 10000 };
    }
    return priceObject;
  };

  const handleChangeDropDown = (event) => {
    setLocation(event.target.value);
    handleFilterChange({
      city: event.target.value,
      sort: sortvalue === "Price High to Low" ? "desc" : "asc",
      price: priceRange,
    });
  };

  const handleSort = (event) => {
    setSortValue(event.target.value);
    handleFilterChange({
      sort: event.target.value === "Price High to Low" ? "desc" : "asc",
      city: location,
      price: priceRange,
    });
  };
  const handlePriceSort = (event) => {
    setPrice(event.target.value);
    setpriceRange(getPriceRange(event.target.value));
    handleFilterChange({
      price: getPriceRange(event.target.value),
      sort: sortvalue === "Price High to Low" ? "desc" : "asc",
      city: location,
    });
    // console.log('Sort----', )
  };

  return (
    <div className="custom-sidebar">
      <Box m={2}>
        <h4 className="sidebar_heading">Filter</h4>
        <div className="select-location">Select Location</div>

        <Box sx={{ maxWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChangeDropDown}
              sx={{ width: 200 }}
            >
              <MenuItem value={""}>ALL</MenuItem>
              <MenuItem value={"Pune"}>Pune</MenuItem>
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Banglore"}>Banglore</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <br />

        {/* <!-- Sort By Price values --> */}

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Price</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={handlePriceSort}
            value={price}
          >
            <FormControlLabel
              value="Less than 10000"
              control={<Radio />}
              label="Less than 10000"
            />
            <FormControlLabel
              value="10000 to 15000"
              control={<Radio />}
              label="10000 to 15000"
            />
            <FormControlLabel
              value="15000+"
              control={<Radio />}
              label="15000+"
            />
            <FormControlLabel value="All" control={<Radio />} label="All" />
          </RadioGroup>
        </FormControl>

        {/* <!-- Sort By Price --> */}
        <FormControl>
          <FormLabel
            id="demo-controlled-radio-buttons-group"
            className="sortSpecific"
          >
            Sort
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={sortvalue}
            onChange={handleSort}
          >
            <FormControlLabel
              value="Price High to Low"
              control={<Radio />}
              label="Price High to Low"
              id="desc"
            />
            <FormControlLabel
              value="Price Low to High"
              control={<Radio />}
              label="Price Low to High"
              id="asc"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default Sidebar;

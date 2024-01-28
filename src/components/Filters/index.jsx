import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from "@mui/material/FormControl";
import ListItem from '@mui/material/ListItem';
import { makeStyles } from "@material-ui/core/styles";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      width: "9vw"
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    select: {
      height: "6vh"
    },
    inputLabel: {
      fontSize: "4vh",
      alignSelf: "center"
    }
  }));


const cities = [
    "All",
    "Pune",
    "Mumbai",
    "Bangalore",
    "Noida",
    "Hyderabad",
];

const sorts = [
    "none",
    "asc",
    "desc"
];

const Filters = () => {
    const classes = useStyles();
    const [city, setCity] = useState(cities[0]);
    const [sort, setSort] = useState(sorts[0]);

    const handleCityChange = (event) => {
        const cityValue = event.target.value;
        setCity(prev => cityValue);
    };

    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        setSort(prev => sortValue);
    }
    return (
        <>
            <Stack direction={"row"} spacing={2} justifyContent={"center"}>

                {/* City Select */}
                <FormControl className={classes.formControl}>
                    <InputLabel id="simple-select-city-label" className={classes.inputLabel}>City</InputLabel>
                    <Select
                        name="City"
                        labelId="simple-select-city-label"
                        id="simple-select-city"
                        value={city}
                        label="City"
                        onChange={handleCityChange}
                        className={classes.select}
                    >
                        {
                            cities.map((city, cityIndex) => (
                                <MenuItem key={`select-city-${cityIndex}`} value={city}>
                                    <Stack direction={"row"}>
                                    <LocationOnOutlinedIcon  fontSize="small"/>
                                    {city}
                                    </Stack>
                                </MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>

                {/* Sort Select*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id="simple-select-sort-label" className={classes.inputLabel}>Price Sort</InputLabel>
                    <Select
                        name="Sort"
                        labelId="simple-select-sort-label"
                        id="simple-select-sort"
                        value={sort}
                        label="Price Sort"
                        onChange={handleSortChange}
                        className={classes.select}
                    >
                        {
                            sorts.map((sort, sortIndex) => (
                                <MenuItem key={`select-sort-${sortIndex}`} value={sort}>{sort}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Stack>
        </>
    )
}

export default Filters;
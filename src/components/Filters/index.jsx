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
        width:"140px"
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    select: {
        height: "6vh",
        minHeight: "40px",
    },
    inputLabel: {
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
    "Nagpur"
];

const sorts = [
    "asc",
    "desc"
];

const Filters = ({ handleFilter }) => {
    const classes = useStyles();
    const [city, setCity] = useState(cities[0]);
    const [sort, setSort] = useState(sorts[0]);

    const handleCityChange = (event) => {
        const cityValue = event.target.value;
        setCity(prev => cityValue);
        handleFilter(prev => ({
            city: cityValue,
            sort,
        }))
    };

    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        setSort(prev => sortValue);
        handleFilter(prev => ({
            sort: sortValue,
            city,
        }))
    };

    return (
        <>
            <Stack direction={{ xs: "column", md: "row" }} gap={2} justifyContent={"center"} alignItems={"center"} flexWrap={"nowrap"}>

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
                                        <LocationOnOutlinedIcon fontSize="small" />
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
import React, { useRef, useState } from 'react';
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";


import "./styles.css"

const cardDetails = [
    {
        name: "Kartik Dhunisinghani",
        description: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests. Add 1 cup of frozen..`
    },
    {
        name: "Yash Dhunisinghani",
        description: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests. Add 1 cup of frozen..`
    },
    {
        name: "Harish Dhunisinghani",
        description: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests. Add 1 cup of frozen..`
    },
    {
        name: "Nikita Dhunisinghani",
        description: `This impressive paella is a perfect party dish and a fun meal
        to cook together with your guests. Add 1 cup of frozen..`
    },
]


const Blank = () => {

    return (
        <>
            <Stack>
                
            </Stack>

        </>
    );
}   


export default Blank;
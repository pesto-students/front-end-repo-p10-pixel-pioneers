import Stack from "@mui/material/Stack"

import Content from "../../components/Content";
import OurLocations from "./OurLocations";
import IndianMap from "../../components/IndianMap";
import Title from "../../components/Title"
import Box from "@mui/material/Box"


const About = () => {
  return (
    <div>
      <Content />
      {/* <OurLocations /> */}
      <Box marginBottom={4}>
        <Title text={"Choose from 50+ locations across 5 cities in India"} textAlign={"center"}/>
      </Box>
      <Stack marginBottom={5} direction={"row"} justifyContent={"center"}>
        <IndianMap />
      </Stack>
    </div>
  );
};

export default About;

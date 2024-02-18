import Stack from "@mui/material/Stack"

import Content from "../../components/Content";
import OurLocations from "./OurLocations";
import IndianMap from "../../components/IndianMap";


const About = () => {
  return (
    <div>
      <Content />
      {/* <OurLocations /> */}
      <Stack marginBottom={10} direction={"row"} justifyContent={"center"}>
        <IndianMap />
      </Stack>
    </div>
  );
};

export default About;

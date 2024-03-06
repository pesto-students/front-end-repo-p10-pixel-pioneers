import { Box } from "@mui/material"
import Stack from "@mui/material/Stack";
import { Typography } from '@mui/material';

import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";

import { Carousel2 } from "../../../components/Carousel2";
import ReviewCards from "../../../components/ReviewCards";

const cardDetails = [
  {
    name: "Krishna Sukhwani",
    description: `Raheja Woods: Where Creativity Takes Flight - A vibrant coworking space fostering innovation and collaboration among diverse professionals`,
    date: "May 5, 2022",
  },
  {
    name: "Mukul Bhatnagar",
    description: `World Trade Center: Empowering Entrepreneurs - An energetic coworking space designed to fuel creativity and productivity for startups and freelancers alike.`,
    date: "August 4, 2023",
  },
  {
    name: "Harish Das",
    description: `Prestige Tech Park: Rise Together - A dynamic coworking space cultivating a supportive community and providing top-notch amenities for ambitious professionals.`,
    date: "Feb 5, 2024",
  },
  {
    name: "Yogesh Khatri",
    description: `Roshni Tech Hub: Reach New Heights - A modern coworking space offering flexible solutions and fostering connections in a stimulating environment.`,
    date: "Jan 2, 2023",
  },
  {
    name: "Pradnya Kasar",
    description: `Eledeco Center: Strength in Collaboration - A welcoming coworking space where individuals come together to share ideas, skills, and experiences.`,
    date: "June 5, 2022",
  },
  {
    name: "Albert Pinto",
    description: `247 Park: Buzzing with Potential - A buzzing coworking space fueling innovation and entrepreneurship in a collaborative setting.`,
    date: "September 5, 2022",
  },
  {
    name: "Makrand Pande",
    description: `Eleven West: Where Ideas Hatch - A cozy yet dynamic coworking space providing a nurturing environment for startups and creatives.`,
    date: "October 2, 2021",
  },
  {
    name: "Ravi Dubey",
    description: `Zenia: Grow Together - A community-focused coworking space empowering individuals to thrive professionally and personally.`,
    date: "July 3, 2022",
  },
  {
    name: "Vishal Bharadwaj",
    description: `Futura: For Trailblazers - A cutting-edge coworking space designed to support pioneers and disruptors in their journey to success.`,
    date: "March 5, 2023",
  },
  {
    name: "Tony Singh",
    description: `Spectrum Tower: Where Magic Happens - A vibrant coworking space sparking creativity and fostering synergies among diverse professionals.`,
    date: "Julu 5, 2021",
  },
];

function Testimonials() {

  return (
    <Box>

      <Box>
        <Title text={"Hear from our members"} textAlign={"center"} />
        <Typography textAlign={"center"} marginTop={2}>{"Here’s what some of our delighted clients have to say"}</Typography>
      </Box>

      {/* Card section */}
      <ReviewCards cards={cardDetails}/>

      {/* Gallery */}
      <Box>
        <Title text={"Solutions that delight"} textAlign={"center"} />
        <Typography variant="body1" textAlign={"center"} marginTop={2}>A one-stop software solution that optimises your space management,</Typography>
        <Typography variant="body1" textAlign={"center"}>provides data-driven insights for cost savings on real estate, and</Typography>
        <Typography variant="body1" textAlign={"center"}>elevates employee experience.</Typography>
        <Carousel2 />
      </Box>
    </Box>
  );
}

export default Testimonials;

import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// images Import
import one from "../../Assets/2.jpg";
import two from "../../Assets/3.jpg";
import three from "../../Assets/5.jpg";
import four from "../../Assets/6.jpg";
import five from "../../Assets/7.jpg";

export const Carousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState();

  const imageData = [
    {
      alt: "image1",
      url: two,
    },
    {
      alt: "image2",
      url: one,
    },
    {
      alt: "image3",
      url: three,
    },
    {
      alt: "image4",
      url: four,
    },
    {
      alt: "image5",
      url: five,
    },
  ];

  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <img
        src={image.url}
        alt={image.alt}
        style={{ border: "6px solid #000", "border-radius": "10px" }}
      />
    </div>
  ));

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 8,
        px: 2,
        display: { xs: "flex" },
      }}
    >
      <Box
        sx={{
          maxWidth: 700,
          width: "100%",
        }}
      >
        <Carousel
          centerSlidePercentage={40}
          thumbWidth={180}
          dynamicHeight={false}
          centerMode={false}
          showArrows={false}
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
          showThumbs={false}
        >
          {renderSlides}
        </Carousel>
      </Box>
    </Stack>
  );
};

import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import BookingForm from "../BookingForm";
import ReviewCard from "../ReviewCard";
import { Description } from "@mui/icons-material";

const ReviewCards = ({}) => {
  return (
    <>
      <Stack>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          slidesPerView={1}
          centeredSlides={false}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 5,
            },
            2560: {
              slidesPerView: 7,
            },
          }}
          navigation={true}
          virtual
        >
          {Array(20)
            .fill(true)
            .map((_, index) => {
              return (
                <SwiperSlide key={`review-card-${index}`} virtualIndex={index}>
                  <Box padding={2}>
                    <ReviewCard />
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Stack>
    </>
  );
};

export default ReviewCards;

// imageListClasses,nameof UserActivation, date,review, rating

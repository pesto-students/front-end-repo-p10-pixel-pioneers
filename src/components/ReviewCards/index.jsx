import React from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import Box from "@mui/material/Box";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ReviewCard from "../ReviewCard";

const ReviewCards = ({cards}) => {
  return (
    <Box padding={2}>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        // loop={true}
        // slidesPerView={1}
        centeredSlides={true}
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
        {cards
          .map((card, cardIndex) => {
            return (
              <SwiperSlide key={`review-card-${cardIndex}`} virtualIndex={cardIndex}>
                <Box padding={2} style={{ backgroundColor: "#f0f0f0" }}>
                  <ReviewCard name={card.name} description={card.description} date={card.date}/>
                </Box>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
};

export default ReviewCards;

// imageListClasses,nameof UserActivation, date,review, rating

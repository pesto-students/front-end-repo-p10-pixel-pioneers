import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const PropertyCarousel = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log(images);
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    images.map((image, imageIndex) => {
                        return (
                            <SwiperSlide key={`carousel-${imageIndex}`}>
                                <img src={image.attributes.url} />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map((image, imageIndex) => {
                        return (
                            <SwiperSlide key={`carousel-thumb-${imageIndex}`}>
                                <img src={image.attributes.url} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    );
}

export default PropertyCarousel;
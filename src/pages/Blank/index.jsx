import { useState } from "react"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import BookingForm from "../../components/BookingForm";
import ReviewCard from "../../components/ReviewCard";
import { Description } from "@mui/icons-material";

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

const items = cardDetails.map((cardDetail, index) => (
    <ReviewCard key={`review-${index}`} name={cardDetail.name} description={cardDetail.description} className={"item"}/>
));

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
    return items.map((item, i) => (
        <div className="thumb" onClick={() => (setThumbIndex(i), setThumbAnimation(true))}>
            {item}
        </div>
    ));
};

const Blank = () => {

    const [thumbIndex, setThumbIndex] = useState(0);
    const [thumbAnimation, setThumbAnimation] = useState(false);
    const [thumbs] = useState(thumbItems(items, [setThumbIndex, setThumbAnimation]));

    const slideNext = () => {
        if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex + 1);
        }
    };

    const slidePrev = () => {
        if (!thumbAnimation && thumbIndex > 0) {
            setThumbAnimation(true);
            setThumbIndex(thumbIndex - 1);
        }
    };

    const syncThumbs = (e) => {
        setThumbIndex(e.item);
        setThumbAnimation(false);

        if (!mainAnimation) {
            setMainIndex(e.item);
        }
    };

    return (
        <>
            <div>
                {/* <BookingForm /> */}

                {/* <Stack margin={10} direction={"row"} sx={{ border: "1px solid black" }}>
                    {
                        Array(3).fill(true).map((_, item) => (
                            <Box margin={5} key={`review-${item}`}>
                                <ReviewCard />
                            </Box>
                        ))
                    }

                </Stack> */}
                <Stack direction="row">
                    <div className="btn-prev" onClick={slidePrev} style={{ border: "1px solid red" }}>&lang;</div>
                    <div className="btn-next" onClick={slideNext} style={{ border: "1px solid blue" }}>&rang;</div>
                </ Stack>
                <div className="thumbs">
                    <AliceCarousel
                        activeIndex={thumbIndex}
                        autoWidth
                        disableDotsControls
                        disableButtonsControls
                        items={thumbs}
                        mouseTracking={false}
                        onSlideChanged={syncThumbs}

                    />
                </div>

            </div>
        </>
    )
}

export default Blank;
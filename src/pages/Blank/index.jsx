// import Slider from "react-slick";
import Carousel from "react-carousel-mui";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import Slider from "./Slider";

const CustomCard = ({ url }) => {
  return (
    <Card>
      <CardMedia component="img" image={url} />
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    // marginTop: "20px",
    marginBottom: "15px",
  },
  imageSlider: {
    // width: "100%",
    // maxWidth: "200px",
    maxHeight: "450px",
    height: "450px",
    cursor: "pointer",
  },
}));

const images = [
  {
    photo:
      "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg ",
    label: "image1",
  },
  {
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0vOS7Ld7G28NWmUKf-mQUn&ust=1707326102702000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiBp8Cbl4QDFQAAAAAdAAAAABAE",
    label: "image2",
  },
  {
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0vOS7Ld7G28NWmUKf-mQUn&ust=1707326102702000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiBp8Cbl4QDFQAAAAAdAAAAABAE",
    label: "image3",
  },
  {
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0vOS7Ld7G28NWmUKf-mQUn&ust=1707326102702000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiBp8Cbl4QDFQAAAAAdAAAAABAE",
    label: "image4",
  },
  {
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0vOS7Ld7G28NWmUKf-mQUn&ust=1707326102702000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiBp8Cbl4QDFQAAAAAdAAAAABAE",
    label: "image2",
  },
  {
    photo:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw0vOS7Ld7G28NWmUKf-mQUn&ust=1707326102702000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiBp8Cbl4QDFQAAAAAdAAAAABAE",
    label: "image3",
  },
];

const Blank = () => {
  const classes = useStyles();
  const srcList = "https://cdn.pixabay.com/photo/2022/01/25/04/42/bird-6965228_1280.jpg "
    .repeat(10)
    .split(" ")
    .slice(0, 10);

  return (
    <>
      <Carousel
        items={srcList}
        className={classes.carouselContainer}
        itemsPerPage={{
          xs: 2,
          sm: 2,
          tablet: 2,
          md: 3,
          lg: 3,
          xl: 3,
        }}
        itemRenderer={(item) => <CustomCard url={item} />}
      />
      <br />
      <Slider
        className={classes.imageSlider}
        sliderItems={images}
        sliderType="fade"
        sliderAutoPlay={true}
        sliderStopOnHover={false}
        slideNavigatorsHide={true}
        sliderIndicators
        sliderIndicatorsStyle={{
          padding: "10px",
        }}
      />
    </>
  );
};

export default Blank;

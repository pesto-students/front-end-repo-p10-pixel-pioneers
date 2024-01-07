import { makeStyles } from "@material-ui/core/styles";
import { testimonials } from "./TestimonialsData";
import TestimonialCard from "./TestimonialCard";
import { Grid } from "@material-ui/core";
// import BookSpaceForm from "./BookSpaceForm";
import galleryImage1 from "../../../Assets/Wallpaper1.jpeg";
import galleryImage2 from "../../../Assets/Wallpaper.jpeg";
import galleryImage3 from "../../../Assets/gallery-1.jpeg";
import galleryImage4 from "../../../Assets/gallery-2.jpeg";
import galleryImage5 from "../../../Assets/gallery-3.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Testimonials() {
  const classes = useStyles();
  return (
    <div>
      {/* <BookSpaceForm /> */}
      <div className="container">
        <div className="testimonialHeading">
          They Satisfied With Our Coworking Spaces
        </div>

        <div className="content-section">
          <div className="TestimonialsContainer">
            <div className="TestimonialsTitle">Testimonials</div>
            <div className="TestimonialsText">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
      </div>
      {/* Card section */}
      <div className={classes.root}>
        <Grid container justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item key={index}>
              <TestimonialCard {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Gallery */}
      <div className="Gallery">
        <h1 className="GalleryTitle">Space Overview</h1>
        <p className="GalleryDesc">
          Generate Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore
        </p>
        <div className="GalleryView">
          <img src={galleryImage1} />
          <img src={galleryImage2} />
          <img src={galleryImage3} />
          <img src={galleryImage4} />
          <img src={galleryImage5} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

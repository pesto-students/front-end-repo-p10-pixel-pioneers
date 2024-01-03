import { makeStyles } from "@material-ui/core/styles";
import { testimonials } from "./TestimonialsData";
import TestimonialCard from "./TestimonialCard";
import { Grid } from "@material-ui/core";
import BookSpaceForm from "./BookSpaceForm";

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
          <img src={"../../../Assets/Wallpaper1.jpeg"} />
          <img src={"../../../Assets/Wallpaper1.jpeg"} />
          <img src={"../../../Assets/Wallpaper1.jpeg"} />
          <img src={"../../../Assets/Wallpaper1.jpeg"} />
          <img src={"../../../Assets/Wallpaper1.jpeg"} />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

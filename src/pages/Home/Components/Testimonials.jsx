import { makeStyles } from "@material-ui/core/styles";
import { Carousel2 } from "../../../components/Carousel2";
import ReviewCards from "../../../components/ReviewCards";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const cardDetails = [
  {
    name: "Kartik Dhunisinghani",
    description: `This impressive paella is a perfect party dish and a fun meal
      to cook together with your guests. Add 1 cup of frozen..`,
    date: "November 19, 2021",
  },
  {
    name: "Yash Dhunisinghani",
    description: `This impressive paella is a perfect party dish and a fun meal
      to cook together with your guests. Add 1 cup of frozen..`,
    date: "August 4, 2019",
  },
  {
    name: "Harish Dhunisinghani",
    description: `This impressive paella is a perfect party dish and a fun meal
      to cook together with your guests. Add 1 cup of frozen..`,
    date: "June 5, 2016",
  },
];

function Testimonials() {
  // const classes = useStyles();
  return (
    <div className="">
      {/* <BookSpaceForm /> */}
      <div className="container ">
        {/* <div className="testimonialHeading">
          Be a part of the happiest coworking space in the country, trusted by
          over 2300 brands and 17,000+ professionals
        </div> 
        <br />*/}
        <div className="testimonialHeading">Proof of the pudding…</div>
        <br />

        <div className="content-section">
          <div className="TestimonialsContainer">
            <div className="TestimonialsText">
              Here’s what some of our delighted clients have to say
            </div>
          </div>
        </div>
      </div>

      {/* Card section */}
      <ReviewCards />
      {/* Gallery */}
      <div className="Gallery section-1-home">
        <h1 className="GalleryTitle">Solutions that delight</h1>
        <p className="GalleryDesc">
          A one-stop software solution that optimises your space management,
          provides data-driven insights for cost savings on real estate, and
          elevates employee experience.
        </p>
        <Carousel2 />
      </div>
    </div>
  );
}

export default Testimonials;

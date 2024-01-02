import "./homepage.css";
import Testimonials from "./Components/Testimonials";
const Home = () => {
  return (
    <>
      <div className="">
        <div className="section-1A">
          <div className="section-1A-outer">
            <div className="heading-1">Comfortable coworking spaces.</div>
            <div className="subHeading">
              Our coworking spaces let you choose to work with others in an
              open-plan area, or a shared office.{" "}
            </div>
            <div className="lower-section">
              <div className="lower-section-btn1">BOOK A SPACE</div>
              <div className="lower-section-btn2">About Us</div>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </>
  );
};

export default Home;

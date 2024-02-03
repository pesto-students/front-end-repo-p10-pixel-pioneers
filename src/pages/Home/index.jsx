import "./homepage.css";
import Testimonials from "./Components/Testimonials";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import GetStarted from "../../components/GetStarted";


const Home = () => {
  return (
    <>
      <div className="">
        <div className="section-1A gallery-view">
          <div className="section-1A-outer">
            <div className="heading-1">Comfortable coworking spaces.</div>
            <div className="subHeading">
              Our coworking spaces let you choose to work with others in an
              open-plan area, or a shared office.
            </div>
            <div className="lower-section">
              <Link to={"properties"} style={{textDecoration: "none"}}>
                <div className="lower-section-btn1">BOOK A SPACE</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
      <Testimonials />
    </>
  );
};

export default Home;

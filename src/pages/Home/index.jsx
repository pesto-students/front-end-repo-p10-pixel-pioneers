import "./homepage.css";
import Testimonials from "./Components/Testimonials";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import GetttingStarted from "../../components/GettingStarted";

const Home = () => {

  return (
    <>
      <div className="">
        <div className="section-1A gallery-view">
          <div className="section-1A-outer">
            <div className="heading-1">Comfortable coworking spaces.</div>
            <div className="subHeading">
              Our coworking spaces let you choose to work with others in an
              open-plan area, or a shared office.{" "}
            </div>
            <div className="lower-section">
              <Link to={"properties"}>
                <div className="lower-section-btn1">BOOK A SPACE</div>
              </Link>
              <Link to={"about"}>
                <div className="lower-section-btn2">About Us</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <GetttingStarted />
      <Testimonials />
      
    </>
  );
};

export default Home;

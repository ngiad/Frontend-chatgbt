import React, { useEffect } from "react";
import AOS from "aos";
import home1 from "../../Components/images/home1.jpg";
import home2 from "../../Components/images/home2.jpg";
import "aos/dist/aos.css";

import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section className="hero">
        <p
          class="highlight"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="400"
        >
          Hello! I’m Tran Dai Nghia,
        </p>
        <h1 data-aos="fade-up" data-aos-delay="400" data-aos-duration="400">
          a Fullstack dev <br class="hide-mobile" />
          the world’s happiest country<sup>*</sup>.
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="400"
          class="mar-top"
        >
          <sup>*</sup>Also known as Vietnam 🇫🇮.
        </p>
      </section>
      <section
        class="work"
        data-aos="fade"
        data-aos-delay="800"
        data-aos-duration="400"
      >
        <div className="content">
          <div className="left">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
              src={home1}
              alt="home1"
            />
          </div>
          <div className="right">
            <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="400">
              Mentor online
            </p>

            <h2 data-aos="fade-up" data-aos-delay="420" data-aos-duration="400">
              Counseling support is everywhere
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="400"
              className="bottom-text"
            >
              This is a free project
            </p>
          </div>
        </div>

        <div className="content-right">
          <div className="left">
            <p data-aos="fade-up" data-aos-delay="400" data-aos-duration="400">
              Expense
            </p>

            <h2 data-aos="fade-up" data-aos-delay="420" data-aos-duration="400">
              Funding support to maintain the project
            </h2>
            <Link
              to={"/donateme"}
              data-aos="fade-up"
              data-aos-delay="450"
              data-aos-duration="400"
              className="bottom-text"
            >
              Donate this here
            </Link>
          </div>
          <div className="right">
            <img
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="400"
              src={home2}
              alt="home2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

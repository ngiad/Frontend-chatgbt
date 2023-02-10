import React, { useEffect } from "react";
import "./FoodterHomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const FoodterHomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="FoodterHomePage">
        <h2 data-aos="fade-right" data-aos-delay="200">
          Let’s connect!
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          Send me a message or connect on{" "}
          <a
            target="_blank"
            href="https://www.facebook.com/ShineTeaVM/"
            rel="noreferrer"
          >
            Facebook
          </a>
          , and let’s discuss how I can help you.
        </p>
      </div>
      <div className="author">
        <p>© 2023 | Tran Dai Nghia</p>
      </div>
    </div>
  );
};

export default FoodterHomePage;

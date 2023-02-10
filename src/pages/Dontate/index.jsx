import React, { useEffect } from "react";
import donateme from "../../Components/images/donateme.jpg";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Donateme.css";

const Donate = () => {

  const Navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="Donate">
      <img data-aos="zoom-in" src={donateme} alt="donateme" />
      <p data-aos="zoom-in-left">Mbbank</p>
      <p data-aos="zoom-in-right">1238882001888</p>
      <p data-aos="fade-up">Tran Dai Nghia</p>
      <button className="btn-back" data-aos="zoom-in-up" onClick={() => Navigate(-1)}>Back</button>
    </div>
  );
};

export default Donate;

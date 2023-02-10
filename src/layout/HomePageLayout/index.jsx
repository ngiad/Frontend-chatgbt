import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import HeaderHomePage from "../../Components/HeaderHomePage";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HomePageLayout.css";
import FoodterHomePage from "../../Components/FoodterHomePage";


const HomePageLayout = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container">
        <HeaderHomePage />
        <Outlet />
      </div>
      <FoodterHomePage />
    </div>
  );
};

export default HomePageLayout;

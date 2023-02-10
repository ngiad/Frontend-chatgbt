import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { update } from "../../Redux/User";
import Requestbase from "../../utils/axios";
import "./HeaderHomePage.css";

const HeaderHomePage = () => {
  const user = useSelector(state => state.User) 
  const Dispatch = useDispatch()


  const handleGetUser = async (token) => {
    try {
      if (!token) return;

      const res = await Requestbase.get("api/user/user-status", {
        headers: {
          token,
        },
      });
      Dispatch(update(res.data))
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("User");
    handleGetUser(token);
  }, []);


  return (
    <div data-aos="fade-down" className="container-header_home">
      <div className="header-home_left">
        <a className="logo" href="/">
          DN
        </a>
      </div>
      <div className="header-home_right">
        <ul>
          {user.token ? (
              <li>
                <Link to={"/chat"}>Chat</Link>
              </li>
          ) : (
            <>
              <li>
                <Link to={"/signin"}>Log in</Link>{" "}
              </li>
              <li>
                <Link to={"/signin"}>Sign up</Link>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HeaderHomePage;

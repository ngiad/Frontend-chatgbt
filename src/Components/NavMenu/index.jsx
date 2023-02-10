import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { update } from "../../Redux/User";
import "./NavMenu.css";

const NavMenu = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch()
  const user = useSelector((state) => state.User)


  const HandleLogout = () => {
    Dispatch(update({}))
    localStorage.removeItem("User")
    Navigate("/")
  }

  return (
    <div className="NavMenu">
      <div className="top scrollbar" id="style-4">
        <div className={`header-container`}> 
          <Link to={"/"} className="logo">
          DN
        </Link> 
        </div>
        
        <div id="listChat">
          <Link to={"/chat"}>New chat</Link >
          {
            user.listChat?.map((item,index) => {
              return <Link key={index} to={`/${item._id}`}>{`${index + 1} .` + item.nameMesage}</Link>
            })
          }
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <button class="uiverse">
              <span class="tooltip">Delete all chats</span>
              <span>Delete all chats</span>
            </button>
          </li>
          <li>
            <button onClick={() => Navigate("/donateme")} class="uiverse">
              <span class="tooltip">Donate me</span>
              <span>Donate</span>
            </button>
          </li>
          <li>
          <button onClick={HandleLogout} class="uiverse">
              <span class="tooltip">Logout</span>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;

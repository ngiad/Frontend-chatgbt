import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Login.css";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Requestbase from "../../utils/axios";
import { useDispatch } from "react-redux";
import { update } from "../../Redux/User";

const Login = () => {

  const Dispatch = useDispatch()

  const [form, dispatch] = useReducer((state, action) =>{
    switch (action.type){
      case "FROM" : 
        return {...state, [action.key] : action.value }
      default :
    }
  },{
    name : "",
    password : "",
    username : ""
  });
  

  useEffect(() => {
    AOS.init();
  }, [])

  const handleChangeForm = (e) => {
    if(!e.target.name) return
    dispatch({type : "FROM",key : e.target.name,value : e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    const { username, password } = form

    if(!username || !password || username.length < 6 || password.length < 6){
      return toast.warning("Not enough information has been entered")
    }

    try{
      const res = await Requestbase.post("api/user/login",{username, password})

      Dispatch(update(res.data)) 
      localStorage.setItem("User",JSON.stringify(res.data.token))
      Navigate("/chat")

    }catch(err){
      toast.warn("happened !!")
    }

  }

  const handleregister = async (e) => {
    e.preventDefault()

    const { username, password,name } = form

    console.log(form);
    try {
      if(!form.name){
        return toast.warning("Not registered successfully")
      }
  
      if(!username || !password || username.length < 6 || password.length < 6){
        return toast.warning("Not enough information has been entered")
      }

      const res = await Requestbase.post("api/user/register",{username, password,name})
      Dispatch(update(res.data)) 
      localStorage.setItem("User",JSON.stringify(res.data.token))
      Navigate("/chat")
    } catch (error) {
      toast.warn("happened !!")
    }
  }

  const Navigate = useNavigate();
  return (
    <div className="Login-main"  data-aos="zoom-in">
      <div class="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div class="login">
          <form class="form" onSubmit={handleLogin}>
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              onChange={handleChangeForm}
              value={!form.name ? form.username  : ""}
              class="input"
              type="text"
              name={!form.name ? "username"  : ""}
              placeholder="User name"
              required=""
            />
            <input
              onChange={handleChangeForm}
              value={!form.name ? form.password  : ""}
              class="input"
              type="password"
              name={!form.name ? "password"  : ""}
              placeholder="Password"
              required=""
            />
            <button>Log in</button>
          </form>
        </div>

        <div class="register">
          <form class="form" onSubmit={handleregister}>
            <label for="chk" aria-hidden="true">
              Register
            </label>
            <input
              onChange={handleChangeForm}
              value={form.name}
              class="input"
              type="text"
              name="name"
              placeholder="name"
              required=""
            />
            <input
              onChange={handleChangeForm}
              value={form.name ? form.username  : ""}
              class="input"
              type="text"
              name={form.name ? "username" : ""}
              placeholder="username"
              required=""
            />
            <input
              onChange={handleChangeForm}
              value={form.name ? form.password  : ""}
              class="input"
              type="password"
              name={form.name ? "password" : ""}
              placeholder="Password"
              required=""
            />
            <button>Register</button>
          </form>
        </div>
      </div>
      <div className="nav-back">
        <button onClick={() => Navigate(-1)}>Back</button>{" "}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

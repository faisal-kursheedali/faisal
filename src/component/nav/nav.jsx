import React from 'react'
import "./nav.css"
import {AiOutlineMenu} from "react-icons/ai"
import {BsSun,BsMoonStars} from "react-icons/bs"
import { useLocation, useNavigate } from 'react-router-dom'
import Brand from '../brand/barnd'
import { useDispatch, useSelector } from 'react-redux'
import { setDarkmode, setSideNav, setUserNavbarActon } from '../../app/feature/state'

const Nav = () => {
  const location = useLocation();
  const dateTime = new Date();
  const dispatch=useDispatch();
  const state=useSelector(store=>store.state)
  const navigate=useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-box">
        <Brand/>
        {
          state.isDark?<span className="nav-logo-mode" onClick={()=>{
            dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "dark-to-light-btn", isSideNavbar: false, desc: "clicked dark to light"}));
            dispatch(setDarkmode(false));
          }}><BsSun style={{color:"yellow"}}/></span>:<span className="nav-logo-mode" onClick={()=>{
            dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "light-to-dark-btn", isSideNavbar: false, desc: "clicked light to dark"}));
            dispatch(setDarkmode(true))}}><BsMoonStars/></span>
        }
        
      <ul className="nav-list">
        <li className="nav-list-item" onClick={()=>{
          dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "home-btn", isSideNavbar: false, desc: "clicked home button"}));
          navigate("/")}}>
          home
        </li>
        <li className="nav-list-item" onClick={()=>{
          dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "project-btn", isSideNavbar: false, desc: "clicked project button"}));
          navigate("/project")}}>
          projects
        </li>
        <li className="nav-list-item" onClick={()=>{
          dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "blog-btn", isSideNavbar: false, desc: "clicked blog button"}));
          navigate("/blog")}}>
          Blog
        </li>
        <li className="nav-list-item" onClick={()=>{
          dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "aboutme-btn", isSideNavbar: false, desc: "clicked aboutme button"}));
          navigate("/aboutme")}}>
          About me
        </li>
      </ul>
      <div className="nav-menu" onClick={()=>{
        dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "menu-btn", isSideNavbar: false, desc: "clicked menu button to open side nav bar"}));
        dispatch(setSideNav(!state.sideNav))}}>
        <AiOutlineMenu/>
      </div>
      </div>
    </div>
  )
}

export default Nav
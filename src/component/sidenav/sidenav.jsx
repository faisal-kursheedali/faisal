import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Brand from '../brand/barnd'
import "./sidenav.css"
import {useDispatch} from "react-redux"
import { setSideNav, setUserNavbarActon } from '../../app/feature/state'

const Sidenav = () => {
  const location = useLocation();
  const dateTime = new Date();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <div className="side-nav-conatiner">
      <div className="sidenav-logo" onClick={()=>{
        navigate("/")
        dispatch(setSideNav(false))
        dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "logo-btn", isSideNavbar: true,desc: "clicked logo button in side nav bar"})); 
        }}>
        <Brand/>
      </div>
      <ul className="side-nav-list">
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/")
            dispatch(setSideNav(false))
            dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "home-btn", isSideNavbar: true,desc: "clicked home button in side nav bar"}));
            
            }}>
            home
          </li>
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/project")
            dispatch(setSideNav(false))
            dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "project-btn", isSideNavbar: true,desc: "clicked project button in side nav bar"}));
            
            }}>
            project
          </li>
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/blog")
            dispatch(setSideNav(false))
            dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "blog-btn", isSideNavbar: true,desc: "clicked blog button in side nav bar"}));

            }}>
            blog
          </li>
          <li className="sidenav-list-item" onClick={()=>{
            navigate("/aboutme")
            dispatch(setSideNav(false))
            dispatch(setUserNavbarActon({path: location.pathname, dateTime: dateTime.toISOString(), action: "aboutme-btn", isSideNavbar: true,desc: "clicked aboutme button in side nav bar"}));
            
            }}>
            about me
          </li>
      </ul>
    </div>
  )
}

export default Sidenav
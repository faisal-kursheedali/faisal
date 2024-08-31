import React from "react";
import "./nav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Brand from "../brand/barnd";
import { useDispatch, useSelector } from "react-redux";
import {
  setDarkmode,
  setSideNav,
  setUserNavbarAction,
} from "../../app/feature/state";

const Nav = () => {
  const location = useLocation();
  const dateTime = new Date();
  const dispatch = useDispatch();
  const state = useSelector((store) => store.state);
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="nav-box">
        <Brand />
        {state.isDark ? (
          <span
            className="nav-logo-mode"
            onClick={() => {
              dispatch(
                setUserNavbarAction({
                  path: location.pathname,
                  dateTime: dateTime.toISOString(),
                  action: "dark-to-light-btn",
                  isSideNavbar: false,
                  desc: "clicked dark to light button",
                })
              );
              dispatch(setDarkmode(false));
            }}
          >
            <BsSun style={{ color: "yellow" }} />
          </span>
        ) : (
          <span
            className="nav-logo-mode"
            onClick={() => {
              dispatch(
                setUserNavbarAction({
                  path: location.pathname,
                  dateTime: dateTime.toISOString(),
                  action: "light-to-dark-btn",
                  isSideNavbar: false,
                  desc: "clicked light to dark button",
                })
              );
              dispatch(setDarkmode(true));
            }}
          >
            <BsMoonStars />
          </span>
        )}

        <ul className="nav-list">
          <li
            className="nav-list-item"
            onClick={() => {
              dispatch(
                setUserNavbarAction({
                  path: location.pathname,
                  dateTime: dateTime.toISOString(),
                  action: "home-link",
                  isSideNavbar: false,
                  desc: "clicked home link",
                })
              );
              navigate("/");
            }}
          >
            home
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              dispatch(
                setUserNavbarAction({
                  path: location.pathname,
                  dateTime: dateTime.toISOString(),
                  action: "project-link",
                  isSideNavbar: false,
                  desc: "clicked project link",
                })
              );
              navigate("/project");
            }}
          >
            projects
          </li>
          <li
            className="nav-list-item"
            onClick={() => {
              dispatch(
                setUserNavbarAction({
                  path: location.pathname,
                  dateTime: dateTime.toISOString(),
                  action: "blog-link",
                  isSideNavbar: false,
                  desc: "clicked blog link",
                })
              );
              navigate("/blog");
            }}
          >
            Blog
          </li>
          {/* <li
            className="nav-list-item"
            onClick={() => {
              dispatch(
                setUserNavbarAction({
                  path: location.pathname,
                  dateTime: dateTime.toISOString(),
                  action: "aboutme-link",
                  isSideNavbar: false,
                  desc: "clicked aboutme link",
                })
              );
              navigate("/aboutme");
            }}
          >
            About me
          </li> */}
        </ul>
        <div
          className="nav-menu"
          onClick={() => {
            dispatch(
              setUserNavbarAction({
                path: location.pathname,
                dateTime: dateTime.toISOString(),
                action: "menu-btn",
                isSideNavbar: false,
                desc: "clicked menu button to open side nav bar",
              })
            );
            dispatch(setSideNav(!state.sideNav));
          }}
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Nav;

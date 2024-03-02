import React from "react";
import { Footer, Nav, Sidenav } from "./component";
import AllRoutes from "./routes";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSideNav,
  setUserAboutAction,
  setUserHomeActon,
} from "./app/feature/state";
import { useLocation } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.state);
  const location = useLocation();
  const dateTime = new Date();
  return (
    <div className="main-conatiner">
      <div className="main-nav">
        <Nav />
      </div>
      <div className="main-content-container">
        {state.sideNav && (
          <div className="main-sidenav">
            <Sidenav />
          </div>
        )}

        <div
          className="main-content"
          onClick={() => dispatch(setSideNav(false))}
        >
          <AllRoutes />
        </div>
        <div className="main-content-btn">
          <button
            className="main-content-btn-primary"
            onClick={() => {
              location.pathname === "/"
                ? dispatch(
                    setUserHomeActon({
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "my-resume-btn",
                      desc: `clicked my resume button`,
                    })
                  )
                : dispatch(
                    setUserAboutAction({
                      path: location.pathname,
                      dateTime: dateTime.toISOString(),
                      action: "my-resume-btn",
                      desc: `clicked my resume button`,
                    })
                  );
            }}
          >
            <a
              href={`${window.location.origin}/cv.pdf`}
              className="main-content-btn-primary-link"
            >
              My Resume
            </a>
          </button>
        </div>
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Main;

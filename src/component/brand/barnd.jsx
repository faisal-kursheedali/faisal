import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./brand.css";
import { setUserNavbarAction } from "../../app/feature/state";
import { useDispatch } from "react-redux";

const Brand = () => {
  const location = useLocation();
  const dateTime = new Date();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <div
        className="brand-logo"
        onClick={() => {
          dispatch(
            setUserNavbarAction({
              path: location.pathname,
              dateTime: dateTime.toISOString(),
              action: "logo-btn",
              isSideNavbar: false,
              desc: "clicked logo button",
            })
          );
          navigate("/");
        }}
      >
        {/* <img src={`${window.location.origin}/favicon.ico`} alt="" className="brand-logo-img" /> */}

        <img
          src={`${window.location.origin}/favicon.ico`}
          alt=""
          className="brand-logo-img"
        />
        <div className="brand-logo-txt">FAISAL</div>
      </div>
    </>
  );
};

export default Brand;

"use client";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Main from "./main";
import { useEffect } from "react";
// import io from "socket.io-client";
import // getOptions,
// sendUser,
// sendUserActions,
// sendUserNavigation,
"./api";
import { useLocation } from "react-router-dom";
import {
  clearUserAction,
  clearUserNavigation,
  setUserEntry,
  setUserNavigation,
} from "./app/feature/state";
import { getOption, onLeave, onLoad } from "./api/rest";

// SOCKE_URL - PRODUCTION
// export const socket = io("https://faisal-portfolio.onrender.com");

// SOCKE_URL - DEVELOPMENT
// export const socket = io("http://localhost:3000/");

function App() {
  const state = useSelector((store) => store.state);
  const dispatch = useDispatch();
  const location = useLocation();
  const dateTime = new Date().toISOString();

  const saveUserNavigation = () =>
    dispatch(setUserNavigation({ path: location.pathname, time: dateTime }));

  useEffect(() => {
    saveUserNavigation();
  }, [location]);

  window.onload = /* async */ () => {
    /* await */
    getOption(dispatch, { name: "collectUserData" });
    // sendUser();
    /* await */ onLoad(dateTime);
    dispatch(setUserEntry(dateTime));
    console.log("👋Hello developers 🧑‍💻");
  };
  window.onunload = () => {
    if (state.collectUserData) {
      // sendUserActions(state, dispatch);
      onLeave({ state, dispatch, date: dateTime });
      // sendUserNavigation(state, dispatch);
    } else {
      dispatch(clearUserAction());
      dispatch(clearUserNavigation());
    }
  };

  useEffect(() => {
    if (state.isDark) {
      document.body.style.backgroundColor = "#313334";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "initial";
      document.body.style.color = "initial";
    }
  }, [state.isDark]);
  return (
    <div className="app">
      <Main />
    </div>
  );
}

export default App;

"use client";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Main from "./main";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  clearUserAction,
  clearUserNavigation,
  // setUserEntry,
  setUserNavigation,
} from "./app/feature/state";
import { getOption, onLeave, onLoad, sendOldActions } from "./api/rest";

function App() {
  const state = useSelector((store) => store.state);
  const dispatch = useDispatch();
  const location = useLocation();
  const dateTime = new Date().toISOString();

  // useEffect(() => {
  //   const handleLoad = (event) => {
  //     event.preventDefault();
  //     getOption(dispatch, { name: "collectUserData" });
  //     onLoad(dateTime);
  //     dispatch(setUserEntry(dateTime));
  //     console.log("👋Hello developers 🧑‍💻");
  //   };
  //   window.addEventListener("load", handleLoad, { capture: true });
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  // window.onload = () => {
  //   getOption(dispatch, { name: "collectUserData" });
  //   onLoad(dateTime);
  //   // dispatch(setUserEntry(dateTime));
  //   console.log("👋Hello developers 🧑‍💻");
  // };

  useEffect(() => {
    getOption(dispatch, { name: "collectUserData" });
    onLoad(dateTime);
    sendOldActions();
    // dispatch(setUserEntry(dateTime));
    console.log("👋Hello developers 🧑‍💻");
  }, [dispatch, getOption, onLoad]);

  document.onvisibilitychange = () => {
    if (state.collectUserData) {
      onLeave({ state, dispatch, date: dateTime });
    } else {
      dispatch(clearUserAction());
      dispatch(clearUserNavigation());
    }
  };
  const saveUserNavigation = () =>
    dispatch(setUserNavigation({ path: location.pathname, time: dateTime }));

  useEffect(() => {
    saveUserNavigation();
  }, [location]);

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

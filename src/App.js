"use client";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Main from "./main";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  clearUserAction,
  clearUserNavigation,
  setUserEntry,
  setUserNavigation,
} from "./app/feature/state";
import { /* getOption, */ onLeave, onLoad } from "./api/rest";

function App() {
  const state = useSelector((store) => store.state);
  const dispatch = useDispatch();
  const location = useLocation();
  const dateTime = new Date().toISOString();

  useEffect(() => {
    const handleLoad = (event) => {
      event.preventDefault();
      onLoad(dateTime);
      dispatch(setUserEntry(dateTime));
      console.log("👋Hello developers 🧑‍💻");
    };
    const handleUnload = (event) => {
      event.preventDefault();
      if (state.collectUserData) {
        onLeave({ state, dispatch, date: dateTime });
      } else {
        dispatch(clearUserAction());
        dispatch(clearUserNavigation());
      }
    };
    window.addEventListener("beforeunload", handleUnload, { capture: true });
    window.addEventListener("load", handleLoad, { capture: true });
    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
  const saveUserNavigation = () =>
    dispatch(setUserNavigation({ path: location.pathname, time: dateTime }));

  useEffect(() => {
    saveUserNavigation();
  }, [location]);

  // window.onload = () => {
  //   // getOption(dispatch, { name: "collectUserData" }); -> todo: do this later
  //   onLoad(dateTime);
  //   dispatch(setUserEntry(dateTime));
  //   console.log("👋Hello developers 🧑‍💻");
  // };
  // window.onunload = () => {
  //   if (state.collectUserData) {
  //     onLeave({ state, dispatch, date: dateTime });
  //   } else {
  //     dispatch(clearUserAction());
  //     dispatch(clearUserNavigation());
  //   }
  // };

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

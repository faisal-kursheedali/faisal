"use client";

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Main from "./main";
import { useEffect } from "react";
import io from "socket.io-client";
import { sendUser, sendUserActions, sendUserNavigation } from "./api";
import { useLocation } from "react-router-dom";
import { setUserEntry, setUserNavigation } from "./app/feature/state";
export const socket = io("http://localhost:3000/");

function App() {
  const state = useSelector((store) => store.state);
  const dispatch = useDispatch();
  const location = useLocation();
  const dateTime = new Date().toISOString();

  useEffect(() => {
    dispatch(setUserNavigation({ path: location.pathname, time: dateTime }));
  }, [location]);

  window.onload = () => {
    sendUser();
    dispatch(setUserEntry(dateTime));
    console.log("👋Hello developers 🧑‍💻");
  };
  document.onvisibilitychange = () => {
    sendUserActions(state, dispatch);
    sendUserNavigation(state, dispatch);
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

import { createSlice } from "@reduxjs/toolkit";
import blogData from "./blogData";
import projectData from "./projectData";
import userAction from "./userAction";
const initialState = {
  isDark: false,
  projectData,
  blogData,
  userAction,
  sideNav: false,
  darkmode: false,
};
const StateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setSideNav: (state, action) => {
      state.sideNav = action.payload;
    },
    setDarkmode: (state, action) => {
      state.isDark = action.payload;
    },

    // user actions
    setUserHomeAction: (state, action) => {
      state.userAction.home = [...state.userAction.home, action.payload];
    },
    setUserProjectAction: (state, action) => {
      state.userAction.project = [...state.userAction.project, action.payload];
    },
    setUserBlogAction: (state, action) => {
      state.userAction.blog = [...state.userAction.blog, action.payload];
    },
    setUserAboutAction: (state, action) => {
      state.userAction.about = [...state.userAction.about, action.payload];
    },
    setUserNavbarAction: (state, action) => {
      state.userAction.navbar = [...state.userAction.navbar, action.payload];
    },
    setUserFooterAction: (state, action) => {
      state.userAction.footer = [...state.userAction.footer, action.payload];
    },
    clearUserAction: (state, action) => {
      state.userAction = initialState.userAction;
    },
  },
});

export const {
  setDarkmode,
  setSideNav,
  setUserBlogAction,
  setUserFooterAction,
  setUserHomeAction,
  setUserNavbarAction,
  setUserProjectAction,
  setUserAboutAction,
  clearUserAction,
  setUserActionOnload,
} = StateSlice.actions;
export default StateSlice.reducer;

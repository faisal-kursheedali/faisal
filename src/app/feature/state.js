import {createSlice} from "@reduxjs/toolkit"
import blogData from "./blogData";
import projectData from "./projectData";
import userAction from "./userAction";
const initialState={
    isDark:false,
    projectData,
    blogData,
    userAction,
    sideNav:false,
    darkmode:false,
}
const StateSlice=createSlice({
    name:"state",
    initialState,
    reducers:{
        setSideNav:(state,action)=>{
            state.sideNav=action.payload;
        },
        setDarkmode:(state,action)=>{
            state.isDark=action.payload;
        },

        // user actions
        setUserHomeActon:(state,action)=>{
            state.userAction.home= [...state.userAction.home, action.payload]
        },
        setUserProjectActon:(state,action)=>{
            state.userAction.project= [...state.userAction.project, action.payload]
        },
        setUserBlogActon:(state,action)=>{
            state.userAction.blog= [...state.userAction.blog, action.payload]
        },
        setUserNavbarActon:(state,action)=>{
            state.userAction.navbar= [...state.userAction.navbar, action.payload]
        },
        setUserFooterActon:(state,action)=>{
            state.userAction.footer= [...state.userAction.footer, action.payload]
        },
    }
})

export const {setDarkmode,setSideNav, setUserBlogActon, setUserFooterActon, setUserHomeActon, setUserNavbarActon, setUserProjectActon}=StateSlice.actions;
export default StateSlice.reducer;
import {createSlice} from "@reduxjs/toolkit"
import blogData from "./blogData";
import projectData from "./projectData";
const initialState={
    isDark:false,
    projectData,
    blogData,
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
        }
    }
})

export const {setDarkmode,setSideNav}=StateSlice.actions;
export default StateSlice.reducer;
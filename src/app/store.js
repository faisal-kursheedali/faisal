import { configureStore } from "@reduxjs/toolkit";
import state from "./feature/state";

const store=configureStore({
    reducer:{
        state:state
    }
})


export default store;
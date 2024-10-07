import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menuSlice";
import {cardSlice} from "./cardSlice"

export const store=configureStore({
    reducer:{
        menu:menuSlice,
        card:cardSlice
    }
})

export default store;
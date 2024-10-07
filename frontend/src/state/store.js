import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import cartSlice from "./cardSlice"

// Adjust the path as needed



export const store=configureStore({
    reducer:{
        menu:menuReducer,
        cart:cartSlice
    }
})

export default store;
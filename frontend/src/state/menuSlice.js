import  { createSlice } from "@reduxjs/toolkit";
import  { MenuService } from "../Services/menu.service";

const menuService=new MenuService()

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        menuItems:menuService.getItemsByCategory('veg')
    },
    reducers:{
        getItemsByCategory:(state,action)=>{
            const items=menuService.getItemsByCategory(action.payload);
            state.menuItems=items
        }
    }
})

export const {getItemsByCategory}=menuSlice.actions

export default menuSlice.reducer;

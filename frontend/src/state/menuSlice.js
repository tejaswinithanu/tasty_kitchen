const { createSlice } = require("@reduxjs/toolkit");
const { MenuService } = require("../services/menu.service");

const menuService=new MenuService()

const menuSlice=createSlice({
    name:"menu",
    initialState:{
        menuItems:[]
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

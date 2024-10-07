import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name:"cardState",
    initialState:{
        cardData:[],
        count:1
    },
    reducers:{
        removeItem(state,action){
            state.cardData = state.cardData.filter((cardItem)=> cardItem.id !== action.payload.id)
        },
        incQuantity(state,action){
            state.count += 1;
        },
        decQuantity(state,action){
            if(state.count === 1){
                state.count = 1;
            }else{
                state.count -= 1;
            }
        }
    }
})

export const {removeItem,incQuantity,decQuantity} = cardSlice.actions;
export default cardSlice.reducer;
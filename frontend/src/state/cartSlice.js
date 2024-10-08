import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cartState",
    initialState:{
        cartData:[],
        count:0,
        totalTollyCount:0
    },
    reducers:{
        removeItem(state,action){
            state.cartData = state.cartData.filter((cartItem)=> cartItem.id !== action.payload);
        },
        addCartItem(state,action){
            let cartItems=state.cartData
            cartItems.push(action.payload)
            state.cartData=cartItems;
        },
        incQuantity(state, action) {
            state.cartData = state.cartData.map((cartItem)=> {
            if(cartItem.id === action.payload){
                return { ...cartItem, quantity:cartItem.quantity += 1,totalPrice:cartItem.totalPrice+cartItem.price}
            }
            return cartItem;
           });
        },
        decQuantity(state, action) {
            state.cartData = state.cartData.map((cartItem)=> {
                if(cartItem.id === action.payload){
                    if(cartItem.quantity === 1){
                       return cartItem;
                    }
                    return { ...cartItem, quantity:cartItem.quantity -= 1,totalPrice:cartItem.totalPrice-cartItem.price}
                }
                return cartItem;
               });
            if(state.count === 1){
                state.count = 1;
            }else{
                state.count -=1;
            }
        },
    }
})

export const {addCartItem,removeItem,incQuantity,decQuantity} = cartSlice.actions;
export default cartSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const orderItems = [
//     { id: 1, name: "Chicken Biryani", quantity: 1, price: "360" },
//     { id: 2, name: "Veg Biryani", quantity: 1, price: "300" },
//     { id: 3, name: "Mutton Biryani", quantity: 1, price: "450" },
// ];

// const cartSlice = createSlice({
//     name: "cartState",
//     initialState: {
//         cartData: orderItems,
//         count: 1,
//         totalTollyCount: 0,
//     },
//     reducers: {
//         removeItem(state, action) {
//             state.cartData = state.cartData.filter((cartItem) => cartItem.id !== action.payload);
//         },
//         incQuantity(state, action) {
//             const item = state.cartData.find((cartItem) => cartItem.id === action.payload);
//             if (item) {
//                 item.quantity += 1; // Correctly increment the quantity of the found item
//             }
//         },
//         decQuantity(state, action) {
//             const item = state.cartData.find((cartItem) => cartItem.id === action.payload);
//             if (item && item.quantity > 1) {
//                 item.quantity -= 1; // Correctly decrement the quantity of the found item
//             }
//         },
//     },
// });

// export const { removeItem, incQuantity, decQuantity } = cartSlice.actions;
// export default cartSlice.reducer;

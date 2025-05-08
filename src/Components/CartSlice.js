import { createSlice } from "@reduxjs/toolkit";

// basically we are creating a slice inside the redux-store .
const CartSlice = createSlice({
    name: 'cart', // name of the slice .
    initialState: {    // initial configuraiton of the slice .
        items: [],
        totalPrice : 0 ,
        quantity : 0 ,
    },
    reducers: {   // actions and their corresponding functions are defined .
        addItem: (state, action) => {   // state refers to the data defined inside the initialState of that slice.
            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
            state.quantity +=1;
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalPrice -= action.payload.price;
            state.quantity -=1;
        },
        clearCart: (state) => {
            state.items.length = 0;  //[]
        },

    }
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;
export default CartSlice.reducer;


// In Redux Toolkit, the state inside a slice's reducer is an object — specifically, the object defined in the initialState — and its properties are the data fields you've declared.

// This is how a state looks like in this case .
// state = {
//     items: [...]  // array of strings
// }

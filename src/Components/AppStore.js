import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"


const AppStore = configureStore({
    reducer : {
        cart : CartReducer
    } ,
});

export default AppStore;

// The name CartReducer is just a variable name you chose when importing the reducer from CartSlice.js. You can technically name it anything you want — the key is that it's importing the default export, which is the reducer function from your slice.

// Here, CartReducer is:

// A name you chose locally

// Refers to the reducer function you exported

// Common convention: SliceName + Reducer (for clarity)
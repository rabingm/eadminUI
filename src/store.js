import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/categorySlice.js";

const store = configureStore({
    reducer: {
        category: categoryReducer
    }
})

export default store
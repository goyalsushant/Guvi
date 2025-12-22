import { configureStore } from "@reduxjs/toolkit";
import mealSliceReducer from "../slices/mealSlice";

export const store = configureStore({
    reducer: {
        meals: mealSliceReducer
    }
})
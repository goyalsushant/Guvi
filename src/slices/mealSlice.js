// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit"

export const mealSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        selectedMeal: null,
        loading: false,
        error: null,
        search: ''
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setMeals: (state, action) => {
            state.meals = action.payload
            state.loading = false
        },
        setSelectedMeal: (state, action) => {
            console.log(action.payload)
            state.selectedMeal = action.payload
            state.loading = false
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        setSearch: (state, action) => {
            state.search = action.payload
        }
    }
})

export const { setLoading, setMeals, setSelectedMeal, setError, setSearch } = mealSlice.actions
export default mealSlice.reducer
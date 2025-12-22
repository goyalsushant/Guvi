import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        loading: false,
        search: '',
        initialItems: [],
        count: 0
    },
    reducers: {
        setLoading: (state) => {
            state.loading = true
        },
        setProducts: (state,action) => {
            state.items = action.payload,
            state.initialItems = action.payload
            state.count = state.items.length
            state.loading = false
        },
        setSearch:(state,action) => {
            const search  = action.payload
            state.search = search
            state.items = state.initialItems.filter(item => item.title.toLowerCase().includes(search))
            state.count = state.items.length
        }
    }
})

export const {setLoading, setProducts, setSearch} = productSlice.actions
export default productSlice.reducer
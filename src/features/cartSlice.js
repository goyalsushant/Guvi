import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existingItem = state.items.find( i => i.id === item.id)

            state.totalQuantity++

            if(!existingItem) {
                state.items.push({
                    ...item,
                    quantity: 1
                })
            }
            else {
                existingItem.quantity++
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            const existingItem = state.items.find(i => i.id === id)

            if(!existingItem) return

            state.totalQuantity--

            if(existingItem.quantity === 1) {
                state.items = state.items.filter(i => i.id !== id)
            }
            else {
                existingItem.quantity--
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        changeBalance: (state, action) => {
            state = action.payload
            return state
        },
    },
})

export const selectCurrentBalance = (state) => state.balance

export const { changeBalance } = balanceSlice.actions

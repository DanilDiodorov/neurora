import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    email: null,
    verified: null,
    role: null,
    tokens: null,
    createdAt: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.verified = action.payload.verified
            state.role = action.payload.role
        },
        setAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setVerified: (state, action) => {
            state.verified = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        clearUser: (state) => {
            state = initialState
            return state
        },
    },
})

export const selectCurrentUser = (state) => state.user

export const { setUser, setAuth, setVerified, setEmail, clearUser } =
    userSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const initialState = {
    darkTheme: cookies.get('darktheme') ? cookies.get('darktheme') : false,
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            cookies.set('darktheme', action.payload)
            state.darkTheme = action.payload
        },
    },
})

export const selectCurrentTheme = (state) => state.theme.darkTheme

export const { changeTheme } = themeSlice.actions

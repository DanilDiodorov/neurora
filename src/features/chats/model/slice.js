import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChats: (state, action) => {
            state = action.payload
            return state
        },
        addChat: (state, action) => {
            state = [...state, { canSend: true, ...action.payload }]
            return state
        },
        deleteOneChat: (state, action) => {
            state = state.filter((s) => {
                return s.id !== action.payload
            })
            return state
        },
        setChatCanSend: (state, action) => {
            state = state.map((chat) => {
                if (chat.id.toString() === action.payload.chat_id) {
                    chat.canSend = action.payload.canSend
                    return chat
                } else {
                    return chat
                }
            })
        },
    },
})

export const selectCurrentChats = (state) => state.chats

export const { setChats, addChat, deleteOneChat, setChatCanSend } =
    chatSlice.actions

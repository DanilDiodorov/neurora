import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    canSend: true,
    data: [],
}

export const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        setChatsCanSend: (state, action) => {
            state.canSend = action.payload
            return state
        },
        setChats: (state, action) => {
            state.data = action.payload
            return state
        },
        addChat: (state, action) => {
            state.data = [...state.data, action.payload]
            return state
        },
        deleteOneChat: (state, action) => {
            state.data = state.data.filter((s) => {
                return s.id !== action.payload
            })
            return state
        },
        setChatCanSend: (state, action) => {
            state.data = state.data.map((chat) => {
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

export const {
    setChats,
    addChat,
    deleteOneChat,
    setChatCanSend,
    setChatsCanSend,
} = chatSlice.actions

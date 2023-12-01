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
        setChatFirstLoad: (state, action) => {
            state.data = state.data.map((chat) => {
                if (chat.id.toString() === action.payload.chat_id) {
                    chat.firstLoad = action.payload.firstLoad
                }
                return chat
            })
            return state
        },
        setChatAllMessagesLoaded: (state, action) => {
            state.data = state.data.map((chat) => {
                if (chat.id.toString() === action.payload.chat_id) {
                    chat.allMessagesLoaded = action.payload.allMessagesLoaded
                }
                return chat
            })
            return state
        },
    },
})

export const selectCurrentChats = (state) => state.chats

export const {
    setChats,
    addChat,
    deleteOneChat,
    setChatFirstLoad,
    setChatsCanSend,
    setChatAllMessagesLoaded,
} = chatSlice.actions

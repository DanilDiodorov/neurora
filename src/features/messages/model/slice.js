import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        setMessages: (state, action) => {
            state = [...action.payload, ...state]
            return state
        },
        addOneMessage: (state, action) => {
            state = [...state, action.payload]
            return state
        },
        addPartOfMessage: (state, action) => {
            state = state.map((message) => {
                if (message.mid === action.payload.mid) {
                    message.text += action.payload.text
                    message.url += action.payload.url
                    return message
                } else {
                    return message
                }
            })
        },
        setMessageLoading: (state, action) => {
            state = state.map((message) => {
                if (message.mid === action.payload.mid) {
                    message.loading = action.payload.loading
                    return message
                } else {
                    return message
                }
            })
        },
        deleteByChatID: (state, action) => {
            state = state.filter((s) => {
                return s.chat_id !== action.payload
            })
            return state
        },
    },
})

export const selectCurrentMessages = (state) => state.messages

export const {
    setMessages,
    addOneMessage,
    deleteByChatID,
    addPartOfMessage,
    setMessageLoading,
} = messageSlice.actions

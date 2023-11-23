import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from 'features/theme'
import { userSlice } from 'features/user'
import { chatSlice } from 'features/chats'
import { messageSlice } from 'features/messages'

export default configureStore({
    reducer: {
        theme: themeSlice.reducer,
        user: userSlice.reducer,
        chats: chatSlice.reducer,
        messages: messageSlice.reducer,
    },
})

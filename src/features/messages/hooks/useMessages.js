import { useDispatch } from 'react-redux'
import socket from 'shared/http/socket'
import {
    addOneMessage,
    addPartOfMessage,
    setMessageLoading,
} from '../model/slice'
import { useEffect } from 'react'
import { setChatCanSend } from 'features/chats'

const useMessages = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('chat message', (data) => {
            dispatch(addOneMessage(data))
        })

        socket.on('chat message part', (data) => {
            dispatch(addPartOfMessage(data))
        })

        socket.on('sending', (data) => {
            if (data.sending === 'loading') {
                dispatch(
                    setChatCanSend({ chat_id: data.chat_id, canSend: false })
                )
            } else if (data.sending === 'start') {
                dispatch(setMessageLoading({ mid: data.mid, loading: false }))
            } else if (data.sending === 'end') {
                dispatch(
                    setChatCanSend({ chat_id: data.chat_id, canSend: true })
                )
            }
        })

        return () => {
            socket.off('chat message')
            socket.off('chat message part')
            socket.off('sending')
        }
    })
}

export default useMessages

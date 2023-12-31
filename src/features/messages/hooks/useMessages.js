import { useDispatch } from 'react-redux'
import socket from 'shared/http/socket'
import {
    addOneMessage,
    addPartOfMessage,
    setMessageLoading,
} from '../model/slice'
import { useEffect } from 'react'
import { setChatsCanSend } from 'features/chats'
import { changeBalance } from 'features/wallet'

const useMessages = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        socket.on('chat message', (data) => {
            dispatch(addOneMessage(data))
        })

        socket.on('chat message part', (data) => {
            dispatch(addPartOfMessage(data))
            dispatch(changeBalance(data.balance))
        })

        socket.on('sending', (data) => {
            if (data.sending === 'loading') {
                dispatch(setChatsCanSend(false))
            } else if (data.sending === 'start') {
                dispatch(setMessageLoading({ mid: data.mid, loading: false }))
            } else if (data.sending === 'end') {
                dispatch(setChatsCanSend(true))
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

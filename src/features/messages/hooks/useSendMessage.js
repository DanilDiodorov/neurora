import { useDispatch, useSelector } from 'react-redux'
import { addOneMessage } from '../model/slice'
import socket from 'shared/http/socket'
import { selectCurrentChats } from 'features/chats'
import { animateScroll } from 'react-scroll'

export const useSendMessage = () => {
    const dispatch = useDispatch()
    const chats = useSelector(selectCurrentChats)

    const sendMessage = async (chatID, text) => {
        const currentChat = chats.filter((chat) => {
            return chat.id.toString() === chatID.toString()
        })

        try {
            const date = new Date().toString()

            const data = {
                chat_id: chatID,
                type: 'text',
                text,
                created_at: date,
                url: '',
                ismy: true,
            }
            console.log(currentChat[0])
            socket.emit('message', {
                ...data,
                chatType: currentChat[0].type,
                chatModel: currentChat[0].model,
            })
            dispatch(addOneMessage(data))
            setTimeout(() => {
                animateScroll.scrollToBottom({
                    smooth: true,
                    duration: 100,
                    containerId: 'ContainerElementID',
                })
            }, 100)
        } catch (error) {
            console.log(error)
        }
    }

    return sendMessage
}

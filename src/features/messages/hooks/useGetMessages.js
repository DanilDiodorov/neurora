import $api from 'shared/http'
import { useDispatch } from 'react-redux'
import { setMessages } from '../model/slice'
import { useEffect, useState } from 'react'
import { setChatAllMessagesLoaded, setChatFirstLoad } from 'features/chats'
import { animateScroll } from 'react-scroll'

const useGetMessages = (chatID, currentChat) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (currentChat.firstLoad) {
            loadMoreMessages(0, 10)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentChat])

    const loadMoreMessages = async (offset, limit) => {
        setLoading(true)
        try {
            const lastHeight = document.querySelector(
                '#ContainerElementID'
            ).scrollHeight
            const messages = await $api.post('/messages/get', {
                id: chatID,
                offset,
                limit,
            })
            if (messages.data.length !== 0) {
                dispatch(setMessages(messages.data))
                if (currentChat.firstLoad) {
                    setTimeout(() => {
                        animateScroll.scrollToBottom({
                            smooth: false,
                            duration: 0,
                            containerId: 'ContainerElementID',
                        })
                    }, 0)
                    dispatch(
                        setChatFirstLoad({ chat_id: chatID, firstLoad: false })
                    )
                } else {
                    setTimeout(() => {
                        const newHeight = document.querySelector(
                            '#ContainerElementID'
                        ).scrollHeight
                        document
                            .querySelector('#ContainerElementID')
                            .scrollTo(0, newHeight - lastHeight)
                    }, 0)
                }
            } else {
                dispatch(
                    setChatAllMessagesLoaded({
                        chat_id: chatID,
                        allMessagesLoaded: true,
                    })
                )
            }
            setTimeout(() => {
                setLoading(false)
            }, 100)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    return [loadMoreMessages, loading]
}

export default useGetMessages

import MessageBlock from 'entities/message-block'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCurrentMessages } from '../model/slice'
import { useParams } from 'react-router-dom'
import useMessages from '../hooks/useMessages'
import useGetMessages from '../hooks/useGetMessages'
import { useEffect } from 'react'

export const MessagesList = ({ currentChat, currentScroll }) => {
    const messages = useSelector(selectCurrentMessages)
    const { id } = useParams()
    const [loadMoreMessages, loading] = useGetMessages(id, currentChat)

    useMessages()

    const chatMessages = messages.filter((message) => {
        return message.chat_id === id
    })

    const list = chatMessages.map((message) => (
        <MessageBlock
            text={message.text}
            isMy={message.is_my}
            url={message.url}
            loading={message.loading || false}
            name={message.is_my ? 'Me' : currentChat ? currentChat.name : ''}
            time={message.created_at}
        />
    ))

    useEffect(() => {
        if (
            currentScroll < 400 &&
            !loading &&
            currentChat.firstLoad === false &&
            !currentChat.allMessagesLoaded
        ) {
            loadMoreMessages(list.length, 10)
        }
    }, [currentScroll, loadMoreMessages, list, loading, currentChat])

    return <Main>{list}</Main>
}

const Main = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin: 10px 0;
`

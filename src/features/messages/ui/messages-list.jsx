import MessageBlock from 'entities/message-block'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCurrentMessages } from '../model/slice'
import { useParams } from 'react-router-dom'
import useMessages from '../hooks/useMessages'

export const MessagesList = ({ currentChat }) => {
    const messages = useSelector(selectCurrentMessages)
    const { id } = useParams()
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
            name={message.ismy ? 'Me' : currentChat ? currentChat.name : ''}
            time={message.created_at}
        />
    ))

    return <Main>{list}</Main>
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
    margin: 10px 0;
`

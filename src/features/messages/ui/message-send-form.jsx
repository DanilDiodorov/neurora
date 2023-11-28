import { useEffect, useState } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import MessageInput from 'shared/ui/message-input'
import SendButton from 'shared/ui/send-button'
import styled from 'styled-components'
import { useSendMessage } from '../hooks/useSendMessage'
import { useParams } from 'react-router-dom'
import { selectCurrentChats } from 'features/chats'
import { useSelector } from 'react-redux'

let shift = false

export const MessageSendForm = ({ Container, currentChat }) => {
    const [text, setText] = useState('')
    const sendMessage = useSendMessage()
    const { id } = useParams()
    const [active, setActive] = useState(false)
    const chats = useSelector(selectCurrentChats)

    const sendHandler = () => {
        if (active && chats.canSend) {
            sendMessage(id, text)
            setText('')
        }
    }

    const keyDownHandler = (e) => {
        if (e.keyCode === 16) {
            shift = true
        }
        if (e.keyCode === 13 && !shift) {
            e.preventDefault()
            sendHandler()
        }
    }

    const keyUpHandler = (e) => {
        if (e.keyCode === 16) {
            shift = false
        }
    }

    useEffect(() => {
        if (text !== '') {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [text])

    return (
        <Main>
            <Container>
                <MainContent>
                    <MessageInput
                        rows={1}
                        value={text}
                        placeholder="Сообщение"
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={keyDownHandler}
                        onKeyUp={keyUpHandler}
                    />
                    <SendButton
                        active={chats.canSend && active}
                        onClick={sendHandler}
                    >
                        <BiSolidSend />
                    </SendButton>
                </MainContent>
            </Container>
        </Main>
    )
}

const Main = styled.div``
const MainContent = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

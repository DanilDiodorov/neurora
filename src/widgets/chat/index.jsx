import { selectCurrentChats } from 'features/chats'
import {
    MessageDeleteButton,
    MessageSendForm,
    MessageStopGenerateButton,
    MessagesList,
} from 'features/messages'
import { selectCurrentMessages } from 'features/messages/model/slice'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { animateScroll } from 'react-scroll'
import styled from 'styled-components'

let lastSize = 0,
    currentSize = 0

const ChatWidget = () => {
    const [flag, setFlag] = useState(false)
    const { id } = useParams()
    const messages = useSelector(selectCurrentMessages)
    const chats = useSelector(selectCurrentChats)
    const [resized, setResized] = useState(false)
    const [currentChat, setCurrentChat] = useState({})

    const resizeHandler = () => {
        let block = document.querySelector('#ContainerElementID')
        currentSize = block.scrollHeight
        if (currentSize > lastSize) {
            setResized(!resized)
            lastSize = currentSize
        } else if (currentSize < lastSize) {
            lastSize = currentSize
        }
    }

    useEffect(() => {
        let block = document.querySelector('#ContainerElementID')
        if (block.scrollHeight - (block.clientHeight + block.scrollTop) < 200) {
            animateScroll.scrollToBottom({
                smooth: true,
                duration: 100,
                containerId: 'ContainerElementID',
            })
        }
    }, [resized])

    useEffect(() => {
        if (flag) {
            let block = document.querySelector('#ContainerElementID')
            if (block.clientHeight < block.scrollHeight) {
                animateScroll.scrollToBottom({
                    smooth: true,
                    duration: 0,
                    containerId: 'ContainerElementID',
                })
                setFlag(false)
            }
        }
        setFlag(false)
    }, [id, messages, flag])

    useEffect(() => {
        setFlag(true)
    }, [id])

    useEffect(() => {
        chats.forEach((chat) => {
            if (chat.id.toString() === id) {
                setCurrentChat(chat)
                console.log(chat)
            }
        })
    }, [id, chats])

    useEffect(() => {
        resizeHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])

    return (
        <Main>
            <MessagesContent id="ContainerElementID">
                <Container>
                    <MessagesList currentChat={currentChat} />
                </Container>
            </MessagesContent>
            <MessagesToolBar>
                <Container>
                    <MessagesToolBarContent>
                        <Left>
                            <MessageDeleteButton />
                        </Left>
                        <Right>
                            <MessageStopGenerateButton />
                        </Right>
                    </MessagesToolBarContent>
                </Container>
            </MessagesToolBar>
            <MessageSendForm currentChat={currentChat} Container={Container} />
        </Main>
    )
}

const Main = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 60px 60px;
`
const MessagesContent = styled.div`
    overflow: auto;
`

const Container = styled.div`
    padding: 0 10px;
`

const MessagesToolBar = styled.div``

const MessagesToolBarContent = styled.div`
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    align-items: center;
`
const Right = styled.div``

export default ChatWidget

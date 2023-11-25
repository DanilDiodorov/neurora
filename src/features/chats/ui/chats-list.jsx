import { useSelector } from 'react-redux'
import useGetAllChats from '../hooks/useGetAllChats'
import { selectCurrentChats } from '../model/slice'
import ChatButton from 'shared/ui/chat-button'
import SpinnerLoader from 'shared/ui/spinner-loader'
import useDeleteChat from '../hooks/useDeleteChat'
import { useState } from 'react'
import ConfirmPopup from 'entities/confirm-popup'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

export const ChatsList = () => {
    const [loading, error] = useGetAllChats()
    const chats = useSelector(selectCurrentChats)
    const [deleteChat, deleteLoading] = useDeleteChat()
    const [confirmActive, setConfirmActive] = useState(false)
    const location = useLocation()
    const currentChatID = new URLSearchParams(location.search).get('id')

    const onDelete = (id) => {
        deleteChat(id, setConfirmActive, currentChatID)
    }

    return (
        <>
            {error ? error : <></>}
            {loading ? (
                <LoadingBlock>
                    <SpinnerLoader />
                </LoadingBlock>
            ) : (
                chats.map((chat) => (
                    <>
                        <ConfirmPopup
                            onClick={() => onDelete(chat.id)}
                            active={confirmActive}
                            setActive={setConfirmActive}
                            title="Удалить чат"
                            text="Все сообщение из чата будут удалены. Вы действительно хотите удалить этот чат?"
                            loading={deleteLoading}
                        />
                        <ChatButton
                            to={`/chat/${chat.id}?id=${chat.id}`}
                            model={chat.model}
                            type={chat.type}
                            onDelete={() => setConfirmActive(true)}
                            canEdit={chat.can_edit}
                            current={
                                currentChatID !== null &&
                                currentChatID.toString() === chat.id.toString()
                                    ? true
                                    : false
                            }
                        >
                            {chat.name}
                        </ChatButton>
                    </>
                ))
            )}
        </>
    )
}

const LoadingBlock = styled.div`
    text-align: center;
`

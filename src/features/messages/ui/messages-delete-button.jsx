import ConfirmPopup from 'entities/confirm-popup'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import ButtonWithIconBordered from 'shared/ui/button-with-icon-bordered'
import styled from 'styled-components'
import { useDeleteMessages } from '../hooks/useDeleteMessages'
import { useParams } from 'react-router-dom'

export const MessageDeleteButton = () => {
    const [active, setActive] = useState(false)
    const [deleteChatMessages, loading] = useDeleteMessages()
    const { id } = useParams()

    return (
        <>
            <ConfirmPopup
                onClick={() => deleteChatMessages(id, setActive)}
                active={active}
                setActive={setActive}
                title="Удалить сообщения"
                text="Все сообщения будут безвозвартно удалены"
                loading={loading}
            />
            <ButtonWithIconBordered
                width="220px"
                icon={
                    <Icon>
                        <MdDelete />
                    </Icon>
                }
                onClick={() => setActive(true)}
            >
                Удалить сообщения
            </ButtonWithIconBordered>
        </>
    )
}

const Icon = styled.span`
    color: ${({ theme }) => theme.colors.danger};
    display: flex;
    justify-content: center;
    align-items: center;
`

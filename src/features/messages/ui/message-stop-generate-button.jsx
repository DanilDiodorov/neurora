import { MdStop } from 'react-icons/md'
import ButtonWithIconBordered from 'shared/ui/button-with-icon-bordered'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import socket from 'shared/http/socket'

export const MessageStopGenerateButton = () => {
    const { id } = useParams()

    return (
        <>
            <ButtonWithIconBordered
                width="220px"
                icon={
                    <Icon>
                        <MdStop />
                    </Icon>
                }
                onClick={() => socket.emit('stop_generate', id)}
            >
                Остановить
            </ButtonWithIconBordered>
        </>
    )
}

const Icon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`

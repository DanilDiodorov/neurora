import styled from 'styled-components'

const MessageInput = styled.textarea`
    width: calc(100% - 20px);
    padding: 12px 10px;
    font-size: 18px;
    background-color: ${({ theme }) => theme.colors.messageInput};
    border-color: ${({ theme }) => theme.colors.stroke};
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    resize: none;
`

export default MessageInput

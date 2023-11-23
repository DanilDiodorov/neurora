import styled from 'styled-components'

const SendButton = styled.div`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px !important;
    width: 50px !important;
    height: auto;
    font-size: 25px;
    border-radius: 50%;
    background-color: ${({ theme, active }) =>
        active ? theme.colors.button : theme.colors.grey};
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};
    color: white;

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.hoveredButton};
    }
`

export default SendButton

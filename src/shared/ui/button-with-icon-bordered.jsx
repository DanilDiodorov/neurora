import styled from 'styled-components'

const ButtonWithIconBordered = ({ onClick, children, icon }) => {
    return (
        <Main onClick={onClick}>
            <Icon>{icon}</Icon>
            <Text>{children}</Text>
        </Main>
    )
}

const Main = styled.button`
    border: none;
    height: 50px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 15px;
    border: 1px solid ${({ theme }) => theme.colors.stroke};

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }
`

const Icon = styled.div`
    font-size: 20px;
    display: flex;
    align-items: center;
`

const Text = styled.div``

export default ButtonWithIconBordered

import styled from 'styled-components'

const ButtonWithIcon = ({ onClick, children, icon, width = '100%' }) => {
    return (
        <Main width={width} onClick={onClick}>
            <Icon>{icon}</Icon>
            <Text>{children}</Text>
        </Main>
    )
}

const Main = styled.div`
    border: none;
    width: ${({ width }) => width};
    height: 40px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
        cursor: pointer;
    }
`

const Icon = styled.div`
    font-size: 20px;
    margin-left: 15px;
    display: flex;
    align-items: center;
`

const Text = styled.div``

export default ButtonWithIcon

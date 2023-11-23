import styled from 'styled-components'

const ErrorBlock = ({ children }) => {
    return <Main>{children}</Main>
}

const Main = styled.div`
    padding: 10px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    background-color: ${({ theme }) => theme.colors.danger};
    color: white;
`

export default ErrorBlock

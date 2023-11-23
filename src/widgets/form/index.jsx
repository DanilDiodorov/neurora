import Logo from 'shared/ui/logo'
import styled from 'styled-components'

const Form = ({ children, title }) => {
    return (
        <Main>
            <LogoBlock>
                <Logo />
            </LogoBlock>
            <Title>{title}</Title>
            <Block>
                <Container>{children}</Container>
            </Block>
        </Main>
    )
}

const Main = styled.div`
    background-color: ${({ theme }) => theme.colors.bgContent};
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
`

const Block = styled.div`
    width: 400px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.stroke};
    background-color: ${({ theme }) => theme.colors.bgForm};
    margin-bottom: 70px;
`

const Container = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Title = styled.div`
    font-size: 20px;
`

const LogoBlock = styled.div`
    font-size: 70px;
    margin-top: 50px;
`

export default Form

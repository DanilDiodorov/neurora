import LinkButton from 'shared/ui/link-button'
import styled from 'styled-components'

const Popup = ({
    title = '',
    content,
    buttons = '',
    active,
    setActive,
    loading,
}) => {
    return (
        <Main
            active={active}
            onClick={() => {
                setActive(loading ? true : false)
            }}
        >
            <Block onClick={(e) => e.stopPropagation()}>
                <Title>
                    <Container>
                        <TitleContainer>{title}</TitleContainer>
                    </Container>
                </Title>
                <Content>
                    <Container>
                        <ContentContainer>{content}</ContentContainer>
                    </Container>
                </Content>
                <Buttons>
                    <Container>
                        <ButtonsContainer>
                            <LinkButton
                                active={true}
                                onClick={() => {
                                    setActive(loading ? true : false)
                                }}
                                color="white"
                            >
                                Отмена
                            </LinkButton>
                            {buttons}
                        </ButtonsContainer>
                    </Container>
                </Buttons>
            </Block>
        </Main>
    )
}

const Main = styled.div`
    display: ${({ active }) => (active ? 'flex' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.3);
`

const Block = styled.div`
    background-color: ${({ theme }) => theme.colors.bgForm};
    width: 700px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
`

const Container = styled.div`
    padding: 20px;
`

const Title = styled.div`
    border-bottom: 2px solid ${({ theme }) => theme.colors.stroke};
`

const Content = styled.div``

const Buttons = styled.div``

const TitleContainer = styled.div`
    font-size: 20px;
`

const ContentContainer = styled.div``

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
`

export default Popup

import ProfileCard from 'entities/profile-card'
import { AddChatButton, ChatsList } from 'features/chats'
import { LogoutButton } from 'features/auth/logout'
import { ThemeSwicth } from 'features/theme'
import AppLogo from 'shared/ui/app-logo'
import styled from 'styled-components'

const Menu = () => {
    return (
        <Main>
            <Container>
                <AppLogo />
                <Title>Новый чат</Title>
                <AddChatButton />
                <Title>Чаты</Title>
                <ButtonBlock>
                    <ChatsList />
                </ButtonBlock>
                <BottomBlock>
                    <ProfileCard />
                    <ThemeSwicth />
                    <LogoutButton />
                </BottomBlock>
            </Container>
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    border-right: 1px solid ${({ theme }) => theme.colors.stroke};
    overflow-y: auto;
`

const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Container = styled.div`
    padding: 20px;
`

const Title = styled.div`
    margin: 20px 0;
`

const BottomBlock = styled.div`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 2px solid ${({ theme }) => theme.colors.stroke};
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default Menu

import ProfileCard from 'entities/profile-card'
import { AddChatButton, ChatsList } from 'features/chats'
import { LogoutButton } from 'features/auth/logout'
import { ThemeSwicth } from 'features/theme'
import AppLogo from 'shared/ui/app-logo'
import styled from 'styled-components'
import { BalanceBlock } from 'features/wallet/ui/balance-block'

const Menu = () => {
    return (
        <Main>
            <Container>
                <AppLogo />
                <InfoBlock>
                    <ProfileCard />
                    <BalanceBlock />
                </InfoBlock>
                <ButtonBlock>
                    <AddChatButton />
                    <ChatsListBlock>
                        <ChatsList />
                    </ChatsListBlock>
                </ButtonBlock>
                <BottomBlock>
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

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 40px 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.stroke};
`

const ButtonBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.stroke};
`

const ChatsListBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const Container = styled.div`
    padding: 20px;
`

const BottomBlock = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export default Menu

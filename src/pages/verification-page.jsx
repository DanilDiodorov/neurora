import { VerificationForm } from 'features/auth/verification'
import styled from 'styled-components'
import Form from 'widgets/form'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'features/user'
import FormLink from 'shared/ui/form-link'
import { LogoutButton } from 'features/auth/logout'
import { AiFillMail } from 'react-icons/ai'

const VerificationPage = () => {
    const user = useSelector(selectCurrentUser)

    return (
        <Main>
            <Form title={'Подтверждение почты'}>
                <Block>
                    <Icon>
                        <AiFillMail />
                    </Icon>
                    <Title>Подтверждение почты</Title>
                    <Text>
                        Мы отправили письмо с кодом для активации аккаунта на
                        почту <b>{user.email}</b>{' '}
                        <FormLink to="/change-email">изменить</FormLink>
                        <p>Не забудьте проверить спам</p>
                    </Text>
                </Block>
                <VerificationForm />
                <LogoutButton />
            </Form>
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const Icon = styled.div`
    text-align: center;
    font-size: 40px;
    color: grey;
`

const Title = styled.div`
    text-align: center;
    font-size: 25px;
`

const Text = styled.div`
    font-size: 17px;
`

export default VerificationPage

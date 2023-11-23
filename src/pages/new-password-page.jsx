import { NewPasswordForm } from 'features/auth/new-password'
import FormLink from 'shared/ui/form-link'
import styled from 'styled-components'
import Form from 'widgets/form'
import { RiLockPasswordFill } from 'react-icons/ri'

const NewPasswordPage = () => {
    return (
        <Main>
            <Form title={`Отправить новый пароль`}>
                <Block>
                    <Icon>
                        <RiLockPasswordFill />
                    </Icon>
                    <Title>Новый пароль</Title>
                    <Text>
                        На вашу почту будет отправлен новый пароль.
                        <p>
                            Не забудтьте поменять на новый после входа в
                            стистему
                        </p>
                    </Text>
                </Block>
                <div></div>
                <NewPasswordForm />
                <div>
                    <FormLink to="/">Назад</FormLink>
                </div>
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

export default NewPasswordPage

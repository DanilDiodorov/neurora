import { LoginForm } from 'features/auth/login'
import appConfig from 'shared/app-config'
import FormLink from 'shared/ui/form-link'
import styled from 'styled-components'
import Form from 'widgets/form'

const LoginPage = () => {
    return (
        <Main>
            <Form title={`Войти в аккаунт ${appConfig.APP_NAME}`}>
                <LoginForm />
                <div>
                    Новый пользователь?{' '}
                    <FormLink to="/registration">Создать аккаунт</FormLink>
                </div>
            </Form>
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
`

export default LoginPage

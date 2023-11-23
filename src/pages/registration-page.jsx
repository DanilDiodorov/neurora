import { RegistrationForm } from 'features/auth/registration'
import appConfig from 'shared/app-config'
import FormLink from 'shared/ui/form-link'
import styled from 'styled-components'
import Form from 'widgets/form'

const LoginPage = () => {
    return (
        <Main>
            <Form title={`Создать аккаунт ${appConfig.APP_NAME}`}>
                <RegistrationForm />
                <div>
                    Уже есть аккаунт? <FormLink to="/">Войти</FormLink>
                </div>
            </Form>
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
`

export default LoginPage

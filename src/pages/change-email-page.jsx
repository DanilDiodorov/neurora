import { ChangeEmailForm } from 'features/auth/change-email'
import FormLink from 'shared/ui/form-link'
import styled from 'styled-components'
import Form from 'widgets/form'

const ChangeEmailPage = () => {
    return (
        <Main>
            <Form title={`Изменить почту`}>
                <ChangeEmailForm />
                <div>
                    <FormLink to="/">Отмена</FormLink>
                </div>
            </Form>
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
`

export default ChangeEmailPage

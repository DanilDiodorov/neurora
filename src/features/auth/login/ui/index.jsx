import DefaultButton from 'shared/ui/default-button'
import ErrorBlock from 'shared/ui/error-block'
import FormInput from 'shared/ui/form-input'
import FormLink from 'shared/ui/form-link'
import useLogin from '../hooks/useLogin'
import { useRef } from 'react'

export const LoginForm = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [error, loading, login] = useLogin()

    const clickHandler = () => {
        login(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            {error ? <ErrorBlock>{error}</ErrorBlock> : <></>}

            <FormInput innerRef={emailRef} type="email" text={'E-mail'} />
            <FormInput
                innerRef={passwordRef}
                type="password"
                text={'Пароль'}
                link={<FormLink to="/new-password">Забыли пароль?</FormLink>}
            />
            <DefaultButton loading={loading} onClick={clickHandler}>
                Войти
            </DefaultButton>
        </>
    )
}

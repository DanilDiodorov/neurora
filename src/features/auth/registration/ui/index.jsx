import DefaultButton from 'shared/ui/default-button'
import ErrorBlock from 'shared/ui/error-block'
import FormInput from 'shared/ui/form-input'
import { useRef } from 'react'
import useRegistration from '../hooks/useRegistration'

export const RegistrationForm = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const password2Ref = useRef(null)
    const [error, loading, registration] = useRegistration()

    const clickHandler = () => {
        registration(
            emailRef.current.value,
            passwordRef.current.value,
            password2Ref.current.value
        )
    }

    return (
        <>
            {error ? <ErrorBlock>{error}</ErrorBlock> : <></>}

            <FormInput innerRef={emailRef} type="email" text={'E-mail'} />
            <FormInput innerRef={passwordRef} type="password" text={'Пароль'} />
            <FormInput
                innerRef={password2Ref}
                type="password"
                text={'Повторный пароль'}
            />
            <DefaultButton loading={loading} onClick={clickHandler}>
                Регистрация
            </DefaultButton>
        </>
    )
}

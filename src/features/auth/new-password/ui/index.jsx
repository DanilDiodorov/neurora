import { useRef } from 'react'
import DefaultButton from 'shared/ui/default-button'
import FormInput from 'shared/ui/form-input'
import ErrorBlock from 'shared/ui/error-block'
import useChangeEmail from '../hooks/useNewPassrod'

export const NewPasswordForm = () => {
    const emailRef = useRef(null)
    const [error, loading, changeEmail] = useChangeEmail()

    const clickHandler = () => {
        changeEmail(emailRef.current.value)
    }

    return (
        <>
            {error ? <ErrorBlock>{error}</ErrorBlock> : <></>}
            <FormInput innerRef={emailRef} type="email" text={'E-mail'} />
            <DefaultButton loading={loading} onClick={clickHandler}>
                Отправить
            </DefaultButton>
        </>
    )
}

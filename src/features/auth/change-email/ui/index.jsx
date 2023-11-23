import { useRef } from 'react'
import DefaultButton from 'shared/ui/default-button'
import FormInput from 'shared/ui/form-input'
import ErrorBlock from 'shared/ui/error-block'
import useChangeEmail from '../hooks/useChangeEmail'

export const ChangeEmailForm = () => {
    const newEmailRef = useRef(null)
    const [error, loading, changeEmail] = useChangeEmail()

    const clickHandler = () => {
        changeEmail(newEmailRef.current.value)
    }

    return (
        <>
            {error ? <ErrorBlock>{error}</ErrorBlock> : <></>}
            <FormInput
                innerRef={newEmailRef}
                type="email"
                text={'Новый E-mail'}
            />
            <DefaultButton loading={loading} onClick={clickHandler}>
                Изменить
            </DefaultButton>
        </>
    )
}

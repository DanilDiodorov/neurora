import { useRef } from 'react'
import DefaultButton from 'shared/ui/default-button'
import FormInput from 'shared/ui/form-input'
import useCheckCode from '../hooks/useCheckCode'
import ErrorBlock from 'shared/ui/error-block'
import LinkButton from 'shared/ui/link-button'

export const VerificationForm = () => {
    const codeRef = useRef(null)
    const [error, loading, checkCode, resendLoading, resendCode] =
        useCheckCode()

    const clickHandler = () => {
        checkCode(codeRef.current.value)
    }

    return (
        <>
            {error ? <ErrorBlock>{error}</ErrorBlock> : <></>}
            <FormInput innerRef={codeRef} type="text" text={'Код активации'} />
            <DefaultButton loading={loading} onClick={clickHandler}>
                Проверить
            </DefaultButton>
            <div>
                Код не пришел?{' '}
                <LinkButton active={!resendLoading} onClick={resendCode}>
                    Отправить снова
                </LinkButton>
            </div>
        </>
    )
}

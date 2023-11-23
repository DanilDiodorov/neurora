import { setVerified } from 'features/user'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'

const { useState } = require('react')

const useCheckCode = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [resendLoading, setResendLoading] = useState(false)
    const dispatch = useDispatch()

    const checkCode = async (code) => {
        setLoading(true)
        if (code.length === 0) {
            setError('Заполните все поля')
        } else {
            try {
                await $api.post('/users/check-code', {
                    code,
                })
                setError('')
                setLoading(false)
                dispatch(setVerified(true))
            } catch (err) {
                setError(err.response?.data?.message)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    const resendCode = async () => {
        setResendLoading(true)
        try {
            await $api.post('/users/resend-code')
            setError('')
            setResendLoading(false)
        } catch (err) {
            setError(err.response?.data?.message)
            setResendLoading(false)
        }
        setResendLoading(false)
    }

    return [error, loading, checkCode, resendLoading, resendCode]
}

export default useCheckCode

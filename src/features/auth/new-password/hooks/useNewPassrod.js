import { setEmail } from 'features/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import $api from 'shared/http'

const { useState } = require('react')

const useNewPassword = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const newPassword = async (email) => {
        setLoading(true)
        if (email.length === 0) {
            setError('Заполните все поля')
        } else {
            try {
                await $api.post('/users/new-password', { email })
                setError('')
                setLoading(false)
                dispatch(setEmail(email))
                return navigate('/')
            } catch (err) {
                setError(err.response?.data?.message)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    return [error, loading, newPassword]
}

export default useNewPassword

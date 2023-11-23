import { setAuth, setUser } from 'features/user'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'

const { useState } = require('react')

const useLogin = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const login = async (email, password) => {
        setLoading(true)
        if (email.length === 0 || password.length === 0) {
            setError('Заполните все поля')
        } else {
            try {
                const response = await $api.post('/users/login', {
                    email,
                    password,
                })
                localStorage.setItem('token', response.data.accessToken)
                setError('')
                setLoading(false)
                dispatch(setUser(response.data.user))
                dispatch(setAuth(true))
            } catch (err) {
                setError(err.response?.data?.message)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    return [error, loading, login]
}

export default useLogin

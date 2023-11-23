import { setAuth, setUser } from 'features/user'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import $api from 'shared/http'

const { useState } = require('react')

const useRegistration = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registration = async (email, password, password2) => {
        setLoading(true)
        if (
            email.length === 0 ||
            password.length === 0 ||
            password2.length === 0
        ) {
            setError('Заполните все поля')
        } else if (email.length < 5) {
            setError('E-mail слишком кортокий')
        } else if (password.length < 6) {
            setError('Пароль должен быть 6 или более символов')
        } else if (password !== password2) {
            setError('Пароли не совпадают')
        } else {
            try {
                const response = await $api.post('/users/registration', {
                    email,
                    password,
                })
                localStorage.setItem('token', response.data.accessToken)
                setError('')
                setLoading(false)
                dispatch(setUser(response.data.user))
                dispatch(setAuth(true))
                return navigate('/')
            } catch (err) {
                setError(err.response?.data?.message)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    return [error, loading, registration]
}

export default useRegistration

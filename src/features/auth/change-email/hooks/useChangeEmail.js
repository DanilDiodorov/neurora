import { selectCurrentUser, setEmail } from 'features/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import $api from 'shared/http'

const { useState } = require('react')

const useChangeEmail = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(selectCurrentUser)

    const changeEmail = async (newEmail) => {
        setLoading(true)
        if (newEmail.length === 0) {
            setError('Заполните все поля')
        } else if (newEmail === user.email) {
            setError('Вы ввели тот же E-mail')
        } else {
            try {
                await $api.post('/users/change-email', {
                    newEmail,
                })
                setError('')
                setLoading(false)
                dispatch(setEmail(newEmail))
                return navigate('/')
            } catch (err) {
                setError(err.response?.data?.message)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    return [error, loading, changeEmail]
}

export default useChangeEmail

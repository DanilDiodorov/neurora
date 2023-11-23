import { clearUser } from 'features/user'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const logout = async () => {
        setLoading(true)
        try {
            await $api.post('/users/logout')
            localStorage.removeItem('token')
            dispatch(clearUser())
        } catch (err) {
            console.log(err.response?.data?.message)
        }
        setLoading(false)
    }

    return [logout, loading]
}

export default useLogout

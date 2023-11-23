import { useDispatch } from 'react-redux'
import { setAuth, setUser } from '../model/slice'
import axios from 'axios'

export const useRefresh = () => {
    const dispatch = useDispatch()

    const refresh = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/users/refresh`,
                {
                    withCredentials: true,
                }
            )
            localStorage.setItem('token', response.data.accessToken)
            dispatch(setUser(response.data.user))
            dispatch(setAuth(true))
        } catch (error) {
            console.log(error)
        }
    }

    return refresh
}

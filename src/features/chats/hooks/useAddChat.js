import { useState } from 'react'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'
import { addChat } from '../model/slice'

const useAddChat = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    const chatAdd = async (name, type, model, param, setActive, clear) => {
        setLoading(true)
        if (name.length < 1) {
            setError('')
        } else if (name.length > 20) {
            setError('')
        } else if (param.length > 100) {
            setError('')
        } else {
            try {
                const response = await $api.post('/chats/add', {
                    name,
                    type,
                    model,
                    param,
                })
                setError('')
                setLoading(false)
                dispatch(addChat(response.data))

                setActive(false)
                clear()
            } catch (err) {
                setError(err.response?.data?.message)
                setLoading(false)
            }
        }
        setLoading(false)
    }

    return [chatAdd, loading, error]
}

export default useAddChat

import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'
import { setChats } from '../model/slice'
import { setMessages } from 'features/messages/model/slice'

const useGetAllChats = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        getAllChats()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllChats = async () => {
        setLoading(true)
        try {
            const response = await $api.get('/chats/get')
            response.data.forEach(async (chat) => {
                const messages = await $api.post('/messages/get', {
                    id: chat.id,
                })
                dispatch(setMessages(messages.data))
                console.log(messages.data)
            })

            response.data = response.data.map((chat) => {
                chat.canSend = true
                return chat
            })

            dispatch(setChats(response.data))
        } catch (error) {
            setError(error.response?.data?.message)
        }
        setLoading(false)
    }

    return [loading, error]
}

export default useGetAllChats

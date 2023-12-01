import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'
import { setChats } from '../model/slice'
// import { setMessages } from 'features/messages/model/slice'

let isFetched = false

const useGetAllChats = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isFetched) {
            getAllChats()
            isFetched = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getAllChats = async () => {
        setLoading(true)
        try {
            const response = await $api.get('/chats/get')

            response.data = response.data.map((chat) => {
                chat.firstLoad = true
                chat.allMessagesLoaded = false
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

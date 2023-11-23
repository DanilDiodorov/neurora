import { useState } from 'react'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'
import { deleteByChatID } from '../model/slice'

export const useDeleteMessages = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const deleteChatMessages = async (id, setActive) => {
        setLoading(true)
        try {
            await $api.post('/messages/delete', { id })
            dispatch(deleteByChatID(id))
            setActive(false)
        } catch (error) {}
        setLoading(false)
    }

    return [deleteChatMessages, loading]
}

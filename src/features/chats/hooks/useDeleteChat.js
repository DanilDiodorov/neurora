import { useState } from 'react'
import { useDispatch } from 'react-redux'
import $api from 'shared/http'
import { deleteOneChat } from '../model/slice'
import { useNavigate } from 'react-router-dom'

const useDeleteChat = () => {
    const [deleteLoading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deleteChat = async (id, setConfirmActive, currentChatID = '') => {
        setLoading(true)
        try {
            const response = await $api.post('chats/delete', { id })
            dispatch(deleteOneChat(response.data.id))
            setConfirmActive(false)
            setLoading(false)
            if (id.toString() === currentChatID.toString()) {
                return navigate('/')
            }
        } catch (error) {
            console.log(error.response?.data?.message)
            setLoading(false)
        }
        setLoading(false)
    }
    
    return [deleteChat, deleteLoading]
}

export default useDeleteChat

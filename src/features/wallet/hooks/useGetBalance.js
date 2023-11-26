import { useEffect, useState } from 'react'
import $api from 'shared/http'
import { useDispatch } from 'react-redux'
import { changeBalance } from '../model/slice'

const useGetBalance = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getBalance()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getBalance = async () => {
        try {
            setLoading(true)
            const wallet = await $api.post('/wallets/get')
            dispatch(changeBalance(wallet.data.balance))
            console.log(wallet.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }

    return [loading]
}

export default useGetBalance

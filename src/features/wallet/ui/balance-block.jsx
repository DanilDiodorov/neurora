import BalanceCard from 'entities/balance-card'
import useGetBalance from '../hooks/useGetBalance'
import { selectCurrentBalance } from '../model/slice'
import { useSelector } from 'react-redux'

export const BalanceBlock = () => {
    const balance = useSelector(selectCurrentBalance)
    const [loading] = useGetBalance()

    return <BalanceCard balance={balance} loading={loading} />
}

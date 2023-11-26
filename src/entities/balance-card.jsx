import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

const BalanceCard = ({ balance, loading }) => {
    return (
        <Main>
            <Left>
                <Icon>
                    <FaWallet />
                </Icon>
                <Balance>{balance.toFixed(2)} ₽</Balance>
            </Left>
            <Right>
                <IoMdAdd />
            </Right>
        </Main>
    )
}

const Main = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;
    margin-left: 5px;
`
const Right = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;

    &:hover {
        cursor: pointer;
    }
`
const Icon = styled.div`
    font-size: 30px;
    margin-top: 5px;
`
const Balance = styled.div`
    font-size: 20px;
`

export default BalanceCard

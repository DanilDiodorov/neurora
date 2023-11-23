import styled from 'styled-components'
import { FaUserCircle } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'features/user'
import { useEffect, useState } from 'react'

const ProfileCard = () => {
    const user = useSelector(selectCurrentUser)
    const [role, setRole] = useState('')

    useEffect(() => {
        switch (user.role) {
            case 'free-user':
                setRole('Бесплатный пользователь')
                break
            case 'premium-user':
                setRole('Бесплатный пользователь')
                break
            case 'premium-plus-user':
                setRole('Бесплатный пользователь')
                break
            case 'premium-admin-user':
                setRole('Бесплатный пользователь')
                break
            default:
                setRole('')
        }
    }, [user.role])

    return (
        <Main>
            <Icon>
                <FaUserCircle />
            </Icon>
            <Block>
                <Top>{user.email}</Top>
                <Bottom>{role}</Bottom>
            </Block>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    gap: 10px;
`
const Block = styled.div``
const Top = styled.div``
const Bottom = styled.div`
    font-size: 12px;
    color: grey;
    margin-top: 5px;
`

const Icon = styled.div`
    font-size: 40px;
`

export default ProfileCard

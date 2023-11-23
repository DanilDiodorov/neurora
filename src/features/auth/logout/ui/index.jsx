import { BiLogOut } from 'react-icons/bi'
import ButtonWithIcon from 'shared/ui/button-with-icon'
import useLogout from '../hooks/useLogout'
import ConfirmPopup from 'entities/confirm-popup'
import { useState } from 'react'

export const LogoutButton = () => {
    const [logout, loading] = useLogout()
    const [active, setActive] = useState(false)
    return (
        <>
            <ConfirmPopup
                onClick={logout}
                active={active}
                setActive={setActive}
                title="Выйти"
                text="Вы действительно хотите выйти?"
                loading={loading}
            />
            <ButtonWithIcon icon={<BiLogOut />} onClick={() => setActive(true)}>
                Выйти
            </ButtonWithIcon>
        </>
    )
}

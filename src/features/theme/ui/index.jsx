import SwitchButton from 'entities/switch-button'
import { useDispatch, useSelector } from 'react-redux'
import { changeTheme, selectCurrentTheme } from '../model/slice'

export const ThemeSwicth = () => {
    const isDarkTheme = useSelector(selectCurrentTheme)
    const dispatch = useDispatch()

    return (
        <SwitchButton
            toggled={isDarkTheme}
            onClick={() => {
                dispatch(changeTheme(!isDarkTheme))
            }}
        >
            Тёмный режим
        </SwitchButton>
    )
}

import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'shared/styles/theme'
import { useSelector } from 'react-redux'
import { selectCurrentTheme } from '../model/slice'

export const DefaultThemeProvider = ({ children }) => {
    const isDarkTheme = useSelector(selectCurrentTheme)

    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    )
}

import { DefaultThemeProvider } from 'features/theme'

const withTheme = (component) => () => {
    return <DefaultThemeProvider>{component()}</DefaultThemeProvider>
}

export default withTheme

import compose from 'compose-function'
import withRouter from './with-router'
import withGlobalStyles from './with-global-styles'
import withTheme from './with-theme'
import withRedux from './with-redux'

const withProviders = compose(
    withRedux,
    withRouter,
    withTheme,
    withGlobalStyles
)

export default withProviders

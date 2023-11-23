import GlobalStyles from 'shared/styles/global'

const withGlobalStyles = (component) => () => {
    return (
        <>
            {component()}
            <GlobalStyles />
        </>
    )
}

export default withGlobalStyles

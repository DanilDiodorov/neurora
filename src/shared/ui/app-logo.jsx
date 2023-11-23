import styled from 'styled-components'
import Logo from './logo'
import appConfig from 'shared/app-config'

const AppLogo = () => {
    return (
        <Main>
            <Logo />
            <Title>{appConfig.APP_NAME}</Title>
        </Main>
    )
}

const Main = styled.div`
    font-size: 35px;
    display: flex;
    align-items: center;
    gap: 10px;
`

const Title = styled.div`
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
`

export default AppLogo

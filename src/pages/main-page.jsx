import styled from 'styled-components'
import Content from 'widgets/content'
import Menu from 'widgets/menu'

const MainPage = () => {
    return (
        <Main>
            <Menu />
            <Content />
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: ${({ theme }) => theme.sizes.menu.width} 1fr;
`

export default MainPage

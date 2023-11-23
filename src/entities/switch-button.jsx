import { Switch } from 'shared/ui/switch'
import styled from 'styled-components'
import { MdDarkMode } from 'react-icons/md'

const SwitchButton = ({ children, toggled, onClick }) => {
    return (
        <Main onClick={onClick}>
            <Container>
                <Left>
                    <LogoBlock>
                        <MdDarkMode />
                    </LogoBlock>

                    {children}
                </Left>
                <Right>
                    <Switch toggled={toggled} />
                </Right>
            </Container>
        </Main>
    )
}

const Main = styled.div`
    &:hover {
        cursor: pointer;
    }
`

const Container = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Right = styled.div``

const LogoBlock = styled.div`
    font-size: 20px;
`

export default SwitchButton

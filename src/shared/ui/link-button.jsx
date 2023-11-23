import styled from 'styled-components'

const LinkButton = ({ children, active, onClick, color }) => {
    return (
        <Main active={active} onClick={onClick} color={color}>
            {children}
        </Main>
    )
}

const Main = styled.span`
    color: ${({ theme, active, color = '#1d7195' }) =>
        active ? (color === 'white' ? theme.colors.text : color) : 'grey'};
    pointer-events: ${({ active }) => (active ? 'auto' : 'none')};

    &:hover {
        cursor: pointer;
    }
`

export default LinkButton

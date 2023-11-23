import styled from 'styled-components'
import SpinnerLoader from './spinner-loader'

const DefaultButton = ({ children, onClick, loading = false, width }) => {
    return (
        <Main width={width} loading={loading} onClick={onClick}>
            {loading ? <SpinnerLoader /> : <>{children}</>}
        </Main>
    )
}

const Main = styled.button`
    border: none;
    width: ${({ width = '100%' }) => width};
    height: 35px;
    background-color: ${({ theme, loading }) =>
        loading ? 'grey' : theme.colors.button};
    color: white;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    pointer-events: ${({ loading }) => (loading ? 'none' : 'auto')};

    &:hover {
        background-color: ${({ theme }) => theme.colors.hoveredButton};
    }
`

export default DefaultButton

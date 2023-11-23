import styled, { keyframes } from 'styled-components'

const LoadingPage = () => {
    return (
        <Main>
            <Loader />
        </Main>
    )
}

const Main = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.bgContent};
    display: flex;
    align-items: center;
    justify-content: center;
`

const anim = keyframes`
    100%{transform: rotate(.5turn)}
`

const Loader = styled.div`
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    &::before,
    &::after {
        content: '';
        grid-area: 1/1;
        --c: no-repeat
            radial-gradient(
                farthest-side,
                ${({ theme }) => theme.colors.button} 92%,
                #0000
            );
        background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
            var(--c) 0 50%;
        background-size: 12px 12px;
        animation: ${anim} 1s infinite;
    }
    &::before {
        margin: 4px;
        filter: hue-rotate(45deg);
        background-size: 8px 8px;
        animation-timing-function: linear;
    }
`

export default LoadingPage

import styled, { keyframes } from 'styled-components'

const SpinnerLoader = () => {
    return <Main></Main>
}

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Main = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid #fff;
    border-right: 3px solid transparent;
    margin-bottom: -3px;
    margin-left: -3px;
    box-sizing: border-box;
    animation: ${spin} 1s linear infinite;
`

export default SpinnerLoader

import styled from 'styled-components'

const Button = styled.button`
    border: none;
    width: 100%;
    height: 40px;
    background-color: transparent;
    color: white;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
    }
`

export default Button

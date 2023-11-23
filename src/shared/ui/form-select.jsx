import styled from 'styled-components'

export const FormSelect = ({
    innerRef,
    text,
    link = <></>,
    children,
    onChange,
}) => {
    return (
        <Main>
            <TextBlock>
                <Text>{text}</Text>
                {link}
            </TextBlock>
            <Select onChange={onChange} type="select" ref={innerRef}>
                {children}
            </Select>
        </Main>
    )
}

export const FormSelectOption = ({ children, value = '' }) => {
    return <Option value={value}>{children}</Option>
}

const Main = styled.div``

const TextBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.div``

const Select = styled.select`
    height: 30px;
    width: calc(100%);
    padding-left: 10px;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.bgFormInput};
    border: 1px solid ${({ theme }) => theme.colors.stroke} !important;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    color: ${({ theme }) => theme.colors.text};
    outline: none;
    border: none;
`

const Option = styled.option`
    outline: none;
    border: none;
`

import styled from 'styled-components'

const FormInut = ({ innerRef, type, text, link = <></> }) => {
    return (
        <Main>
            <TextBlock>
                <Text>{text}</Text>
                {link}
            </TextBlock>
            <Input type={type} ref={innerRef} />
        </Main>
    )
}

const Main = styled.div``

const TextBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.div``

const Input = styled.input`
    height: 30px;
    width: calc(100% - 10px);
    padding-left: 10px;
    padding-right: 0;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.bgFormInput} !important;
    border: 1px solid ${({ theme }) => theme.colors.stroke};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    color: ${({ theme }) => theme.colors.text};
`

export default FormInut

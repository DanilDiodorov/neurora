import styled from 'styled-components'

const FormTextarea = ({ innerRef, type = 'text', text, link = <></> }) => {
    return (
        <Main>
            <TextBlock>
                <Text>{text}</Text>
                {link}
            </TextBlock>
            <Input rows={4} type={type} ref={innerRef} />
        </Main>
    )
}

const Main = styled.div``

const TextBlock = styled.div`
    display: flex;
    justify-content: space-between;
`

const Text = styled.div``

const Input = styled.textarea`
    resize: none;
    padding-top: 10px;
    padding-bottom: 10px;
    width: calc(100% - 20px);
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.colors.bgFormInput} !important;
    border: 1px solid ${({ theme }) => theme.colors.stroke};
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    color: ${({ theme }) => theme.colors.text};
`

export default FormTextarea

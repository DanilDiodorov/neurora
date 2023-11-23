import Popup from 'entities/popup'
import { useRef, useState } from 'react'
import DefaultButton from 'shared/ui/default-button'
import FormInut from 'shared/ui/form-input'
import { FormSelect, FormSelectOption } from 'shared/ui/form-select'
import FormTextarea from 'shared/ui/form-textarea'
import styled from 'styled-components'
import useAddChat from '../hooks/useAddChat'
import ErrorBlock from 'shared/ui/error-block'

const Options = ({ type }) => {
    switch (type) {
        case 'text':
            return (
                <>
                    <FormSelectOption value="gpt-3.5-turbo">
                        GPT-3.5-turbo
                    </FormSelectOption>
                    <FormSelectOption value="gpt-4">GPT-4</FormSelectOption>
                </>
            )
        case 'image':
            return (
                <>
                    <FormSelectOption value="DALL-E 2">
                        DALL-E 2
                    </FormSelectOption>
                </>
            )
        default:
            return <></>
    }
}

export const AddChatButton = () => {
    const [active, setActive] = useState(false)
    const nameRef = useRef(null)
    const typeRef = useRef(null)
    const modelRef = useRef(null)
    const paramRef = useRef(null)
    const [chatAdd, loading, error] = useAddChat()
    const [type, setType] = useState('text')

    const clear = () => {
        nameRef.current.value = ''
        paramRef.current.value = ''
    }

    const clickHandler = () => {
        chatAdd(
            nameRef.current.value,
            typeRef.current.value,
            modelRef.current.value,
            paramRef.current.value,
            setActive,
            clear
        )
    }

    const Content = (
        <InputBlock>
            {error ? <ErrorBlock>{error}</ErrorBlock> : <></>}
            <FormInut text="Название" innerRef={nameRef} />
            <FormSelect
                text="Тип"
                innerRef={typeRef}
                onChange={(e) => setType(e.target.value)}
            >
                <FormSelectOption value="text">Текст</FormSelectOption>
                <FormSelectOption value="image">
                    Генерация изображений
                </FormSelectOption>
            </FormSelect>
            <FormSelect text="Модель" innerRef={modelRef}>
                <Options type={type} />
            </FormSelect>
            <FormTextarea innerRef={paramRef} text="Начальный параметр" />
        </InputBlock>
    )
    const Buttons = (
        <>
            <DefaultButton
                loading={loading}
                width={'100px'}
                onClick={clickHandler}
            >
                Добавить
            </DefaultButton>
        </>
    )

    return (
        <>
            <Popup
                title="Добавить чат"
                content={Content}
                buttons={Buttons}
                active={active}
                setActive={setActive}
            />
            <DefaultButton
                onClick={() => {
                    setActive(true)
                }}
            >
                Добавить чат
            </DefaultButton>
        </>
    )
}

const InputBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

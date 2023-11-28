import { marked } from 'marked'
import { useEffect, useRef } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { RiOpenaiFill } from 'react-icons/ri'
import styled, { keyframes } from 'styled-components'
import hljs from 'highlight.js'
import randomstring from 'randomstring'

const MessageBlock = ({
    time,
    text,
    url = '',
    isMy,
    name,
    loading = false,
}) => {
    const textRef = useRef(null)

    useEffect(() => {
        if (text !== '' && loading === false)
            textRef.current.innerHTML = marked.parse(
                typeof text === 'string' ? text : ''
            )

        if (!loading) {
            if (textRef.current.querySelector('pre code') !== null)
                hljs.highlightElement(textRef.current.querySelector('pre code'))
        }

        if (textRef.current.querySelector('pre') !== null) {
            textRef.current.querySelectorAll('pre').forEach((el) => {
                el.id = randomstring.generate()
                const copyElement = <div>asdasd</div>
                el.render(copyElement)
            })
        }
    }, [text, loading])

    useEffect(() => {
        hljs.highlightAll()
    }, [])

    let date = new Date(time)
    time =
        date.toLocaleDateString() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes()

    return (
        <Main isMy={isMy}>
            <Top>
                <Container>
                    <Info>
                        <Icon>
                            {isMy ? <FaUserCircle /> : <RiOpenaiFill />}
                        </Icon>
                        <Block>
                            <Name>{name}</Name>
                            <Time>{time}</Time>
                        </Block>
                    </Info>
                </Container>
            </Top>
            <Bottom>
                <Container>
                    <Loader loading={loading}>
                        <DotCont>
                            <Dot1 />
                        </DotCont>
                        <DotCont>
                            <Dot2 />
                        </DotCont>
                        <DotCont>
                            <Dot3 />
                        </DotCont>
                    </Loader>
                    <Text ref={textRef}></Text>
                    {url !== '' ? <Image src={url} /> : <></>}
                </Container>
            </Bottom>
        </Main>
    )
}

const Main = styled.div`
    background-color: ${({ theme, isMy }) =>
        isMy ? theme.colors.bgFormInput : theme.colors.secondary};
    border: 1px solid
        ${({ theme, isMy }) => (isMy ? theme.colors.stroke : 'transparent')};
    padding: 15px 0;
    min-height: 90px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
`
const Top = styled.div``
const Bottom = styled.div`
    margin-top: 15px;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Icon = styled.div`
    font-size: 40px;
    display: flex;
    align-items: center;
`
const Block = styled.div``
const Name = styled.div``
const Time = styled.div`
    font-size: 12px;
    color: grey;
    margin-top: 5px;
`
const Container = styled.div`
    padding: 0 20px;
`

const Text = styled.div``

const Loader = styled.div`
    display: ${({ loading }) => (loading ? 'flex' : 'none')};
    width: 50px;
    justify-content: space-between;
    align-items: center;
`

const DotCont = styled.div`
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Dot = styled.div`
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #45565e;
`
const DotKeyframes = keyframes`
    0% {
        width: 0;
        height: 0;
    }
    50% {
        width: 14px;
        height: 14px;
    }
    100% {
        width: 0;
        height: 0;
    }
`

const Dot1 = styled(Dot)`
    animation: ${DotKeyframes} 2s linear infinite;
`

const Dot2 = styled(Dot)`
    animation: ${DotKeyframes} 2s linear infinite;
    animation-delay: 0.3s;
`

const Dot3 = styled(Dot)`
    animation: ${DotKeyframes} 2s linear infinite;
    animation-delay: 0.6s;
`

const Image = styled.img``

export default MessageBlock

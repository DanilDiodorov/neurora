import styled from 'styled-components'
import DefaultLink from './default-link'
import { BsChatRightText, BsFillImageFill } from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEditOutline } from 'react-icons/md'

const Logo = ({ type }) => {
    switch (type) {
        case 'text':
            return <BsChatRightText />
        case 'image':
            return <BsFillImageFill />
        default:
            return <BsChatRightText />
    }
}

const ChatButton = ({
    children,
    to,
    canEdit = true,
    model,
    type = '',
    onEdit,
    onDelete,
    current = true,
}) => {
    return (
        <DefaultLink to={to}>
            <Main current={current} canEdit={canEdit}>
                <Container>
                    <Left>
                        <LogoBlock>
                            <Logo type={type} />
                        </LogoBlock>

                        <InfoBlock>
                            <Title>{children}</Title>
                            <ModelInfo>{model}</ModelInfo>
                        </InfoBlock>
                    </Left>
                    <Right
                        className="chat-tools"
                        onClick={(e) => {
                            e.preventDefault()
                        }}
                        canEdit={canEdit}
                    >
                        <EditIcon onClick={onEdit}>
                            <MdModeEditOutline />
                        </EditIcon>
                        <DeleteIcon>
                            <AiFillDelete onClick={onDelete} />
                        </DeleteIcon>
                    </Right>
                </Container>
            </Main>
        </DefaultLink>
    )
}

const Left = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

const Right = styled.div`
    display: none;
    align-items: center;
    gap: 5px;
`

const Main = styled.div`
    width: calc(100% - 4px);
    height: 50px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius};
    display: flex;
    align-items: center;

    background-color: ${({ theme, current }) =>
        current ? theme.colors.grey : 'transparent'};
    border-left: 4px solid
        ${({ theme, current }) =>
            current ? theme.colors.button : 'transparent'};

    &:hover {
        background-color: ${({ theme }) => theme.colors.grey};
        border-left: 4px solid ${({ theme }) => theme.colors.button};
    }

    &:hover .chat-tools {
        display: ${({ canEdit }) => (canEdit ? 'flex' : 'none')};
    }
`

const EditIcon = styled.div`
    &:hover {
        color: ${({ theme }) => theme.colors.button};
    }
`
const DeleteIcon = styled.div`
    &:hover {
        color: ${({ theme }) => theme.colors.danger};
    }
`

const Container = styled.div`
    width: 100%;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const InfoBlock = styled.div``

const Title = styled.div`
    font-size: 18px;
`

const ModelInfo = styled.div`
    color: grey;
    font-size: 11px;
    margin-top: 5px;
`
const LogoBlock = styled.div`
    font-size: 20px;
    color: grey;
`

export default ChatButton

import Popup from './popup'
import DefaultButton from 'shared/ui/default-button'

const ConfirmPopup = ({
    title,
    text,
    onClick,
    active,
    setActive,
    loading = false,
}) => {
    return (
        <Popup
            title={title}
            content={text}
            buttons={
                <DefaultButton
                    width="100px"
                    onClick={onClick}
                    loading={loading}
                >
                    Ок
                </DefaultButton>
            }
            active={active}
            loading={loading}
            setActive={setActive}
        />
    )
}

export default ConfirmPopup

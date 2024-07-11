import styled from "styled-components"
import Image from "../Gallery/Image"
import { IoClose } from "react-icons/io5";


const Overlay = styled.div`
    bottom: 0;
    background: rgba(0,0,0,0.4);
    left: 0;
    right: 0;
    top: 0;
    position: fixed;
    z-index: 10;
`

const DialogStyled = styled.dialog`
    background: none;
    border: none;
    margin-top: 95px;
    max-width: 1156px;
    position: relative;
    width: 100%;
`

const DiologButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 30px;
`

const ModalZoom = ({imageSelected, setImageSelected, onToggleFavorite}) => {
    return(<>
    {imageSelected && 
        <Overlay> 
            <DialogStyled open={!!imageSelected}>
                <Image showMaxIcon={false} imageObject={imageSelected} onToggleFavorite={onToggleFavorite}></Image>
                <form method="dialog">
                    <DiologButton onClick={() => setImageSelected(null)}>
                        <IoClose size={25} title="close"/>
                    </DiologButton>
                </form>
            </DialogStyled>
        </Overlay>
    }
    </>
    )
}

export default ModalZoom
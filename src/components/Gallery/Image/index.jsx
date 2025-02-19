import styled from "styled-components"
import { AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { LuMaximize2 } from "react-icons/lu";


const FigureContent = styled.figure`
    margin:0; 
    padding: 0;
    width: 100%;

`
const ImageStyle = styled.img`
    border-radius: 20px 20px 0 0;
    display: block;
    width: 100%;
`

const FigcaptionStyle = styled.figcaption`
    background: #001634;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 4px 4px 0px #00000026;
    color: #fff;
    display: flex;
    line-height: 24px;
    padding: 16px 21px;
    

    h3 {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
    }

    h5 {
        font-size: 16px;
        margin: 0;
    }
`

const ActionContainer = styled.div`
    align-items: flex-end;
    display: flex;
    flex-grow: 1;
    gap: 24px;
    justify-content: flex-end;

    svg {
        cursor: pointer
    }
`

const Image = ({onMax, showMaxIcon = true, imageObject, onToggleFavorite}) => {
    return(<FigureContent>
        <ImageStyle src={imageObject.path} alt={imageObject.title} />
        <FigcaptionStyle>
            <div>
                <h3>{imageObject.title}</h3>
                <h5>{imageObject.font}</h5>
            </div>
            <ActionContainer>
                {imageObject.liked ? <AiFillHeart size={25} title="Like" color="#fff" onClick={() => onToggleFavorite(imageObject)} /> : <AiOutlineHeart title="Like" size={25} onClick={() => onToggleFavorite(imageObject)}/>}
                {showMaxIcon ? <LuMaximize2 size={25} onClick={() => onMax(imageObject)} title="Maximize image"/> : ''}
            </ActionContainer>
        </FigcaptionStyle>
    </FigureContent>)
}

export default Image
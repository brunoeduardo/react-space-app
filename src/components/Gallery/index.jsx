import styled from "styled-components"
import Title from "../Title"
import Popular from "../Popular"
import Tags from "./Tags"
import Image from "./Image"

const GalleryContainer = styled.div`
    display: flex;
    gap: 20px;

`

const GalleryContent = styled.section`
flex: 1;
`

const ImagesContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    figure {
        max-width: 450px
    }
`


const Gallery = ({images, onMax,onToggleFavorite, tagFilter}) => {
    return(<>
        <Tags tagFilter={tagFilter}/>
        <GalleryContainer>
            <GalleryContent>
                <Title>Browse the gallery</Title>
                <ImagesContent>
                    {images.map(image => (<Image key={image.id} imageObject={image} onMax={onMax} onToggleFavorite={onToggleFavorite}></Image>))}
                </ImagesContent>
            </GalleryContent>
            <Popular/>
        </GalleryContainer>
    </>)
}

export default Gallery
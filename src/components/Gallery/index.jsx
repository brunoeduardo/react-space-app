import styled from "styled-components"
import Title from "../Title"
import Popular from "../Popular"
import Tags from "./Tags"
import Image from "./Image"

const GalleryContainer = styled.div`
    display: flex;

`

const GalleryContent = styled.section`
    flex-grow: 1;
`

const ImagesContent = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    figure {
        max-width: 517px
    }
`


const Gallery = ({images, onMax}) => {
    return(<>
        <Tags/>
        <GalleryContainer>
            <GalleryContent>
                <Title>Browse the gallery</Title>
                <ImagesContent>
                    {images.map(image => (<Image key={image.id} imageObject={image} id={image.id} title={image.title} font={image.font} imageSrc={image.path} liked={image.liked} onMax={onMax}></Image>))}
                </ImagesContent>
            </GalleryContent>
            <Popular/>
        </GalleryContainer>
    </>)
}

export default Gallery
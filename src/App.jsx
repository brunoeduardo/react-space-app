import styled from "styled-components"
import StyleDefault from "./components/StyleDefault"
import Header from "./components/header"
import Aside from "./components/Aside"
import MainBanner from "./components/MainBanner"
import Gallery from "./components/Gallery"
import mainBanner from "../public/images/banner.png"
import imagesList from "./images-list.json"
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  padding: 24px;
  width: 100%;
`
const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 24px;
`

const GalleryContainer = styled.div`
  display: flex;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [imageGallery, setImageGallery] = useState(imagesList);
  const [imageSelected, setImageSelected] = useState(null)
  
  const onToggleFavorite = (image) => {
    if(image.id === imageSelected?.id) {
      setImageSelected({...imageSelected, liked: !imageSelected.liked})
    }
    setImageGallery(imageGallery.map(item => {
      return {
        ...item,
        liked: item.id === image.id ? !item.liked : item.liked
      }
    }))
  }

  const filterList = (value) => {
    if( value.id === 0) {
      setImageGallery(imagesList)
      return 
    }
    setImageGallery(imagesList.filter(item => item.tagId === value.id))
  }

  return (
    <BackgroundGradient>
      <StyleDefault/>
      <MainContainer>
        <Header/>
        <GalleryContainer>
          <Aside/>
          <GalleryContent>
          <MainBanner title="The most complete gallery of space photos!" srcImage={mainBanner}/>
          <Gallery images={imageGallery} imageSelected={imageSelected} onMax={setImageSelected} onToggleFavorite={onToggleFavorite} filterList={filterList}></Gallery>
          </GalleryContent>
        </GalleryContainer>
      </MainContainer>
      <ModalZoom imageSelected={imageSelected} setImageSelected={setImageSelected} onToggleFavorite={onToggleFavorite}/>
    </BackgroundGradient>
  )
}

export default App

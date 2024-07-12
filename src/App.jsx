import styled from "styled-components"
import StyleDefault from "./components/StyleDefault"
import Header from "./components/header"
import Aside from "./components/Aside"
import MainBanner from "./components/MainBanner"
import Gallery from "./components/Gallery"
import mainBanner from "../public/images/banner.png"
import imagesList from "./images-list.json"
import { useEffect, useState } from "react"
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

const FooterStyled = styled.footer`
  background: #04244F;
  color: #fff;
  height: 80px;
  padding-right: 15px;
  padding-top:40px;
  text-align: right;
  width: 100%;
`

const App = () => {
  const [listImages, setListImages] = useState(imagesList)
  const [imageGallery, setImageGallery] = useState(listImages);
  const [imageSelected, setImageSelected] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [tagFilter, setTagFilter] = useState(0)

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
    setListImages(listImages.map(item => {
      return {
        ...item,
        liked: item.id === image.id ? !item.liked : item.liked
      }
    }))  
  }

  useEffect(() => {
    const imgFiltered = listImages.filter(img => {
      const filterByTag = !tagFilter.id || img.tagId === tagFilter.id;
      const filterByText = !filterText || img.title.toLowerCase().includes(filterText.toLowerCase())
      return filterByTag && filterByText
    })

    setImageGallery(imgFiltered)
  }, [filterText, tagFilter])


  return (<>
    <BackgroundGradient>
      <StyleDefault/>
      <MainContainer>
        <Header onChange={setFilterText}/>
        <GalleryContainer>
          <Aside/>
          <GalleryContent>
          <MainBanner title="The most complete gallery of space photos!" srcImage={mainBanner}/>
          <Gallery images={imageGallery} imageSelected={imageSelected} onMax={setImageSelected} onToggleFavorite={onToggleFavorite} tagFilter={setTagFilter}></Gallery>
          </GalleryContent>
        </GalleryContainer>
      </MainContainer>
      <ModalZoom imageSelected={imageSelected} setImageSelected={setImageSelected} onToggleFavorite={onToggleFavorite}/>
    </BackgroundGradient>
    <FooterStyled>Desenvolvido por Bruno</FooterStyled>
  </>
  )
}

export default App

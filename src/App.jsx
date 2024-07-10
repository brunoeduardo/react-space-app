import styled from "styled-components"
import StyleDefault from "./components/StyleDefault"
import Header from "./components/header"
import Aside from "./components/Aside"
import MainBanner from "./components/MainBanner"

const BackgroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  min-height: 100vh;
  padding: 24px;
  width: 100%;
`

const ContentBanner = styled.div`
  display: flex;

`

function App() {

  return (
    <BackgroundGradient>
      <StyleDefault/>
      <Header/>
      <ContentBanner>
        <Aside/>
        <MainBanner/>
      </ContentBanner>
    </BackgroundGradient>
  )
}

export default App

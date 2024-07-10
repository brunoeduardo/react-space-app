import styled from "styled-components"
import mainBanner from "../../../public/images/banner.png"

const BannerStyled = styled.div`
    align-items: center;
    background: linear-gradient(90deg, #C98CF1 0%, #7B78E5 100%);
    border-radius: 20px;
    display: flex;
    height: 330px;
    overflow: hidden;
    position: relative;
    width: 100%;
`

const BannerImageStyle = styled.img`
    min-height: 340px;
    opacity: 80%;
    position: absolute;
    width: 100%;
    z-index: 1;
`

const BannerTitleStyled = styled.h1`
    color: #fff;
    font-size: 40px;
    font-weight: 400;
    margin: 92px 64px;
    width: 300px;
    z-index: 2;
`

const MainBanner = () => {
    return(
        <BannerStyled $backgroundImage={mainBanner}>
            <BannerImageStyle src={mainBanner}></BannerImageStyle>
            <BannerTitleStyled>The most complete gallery of space photos!</BannerTitleStyled>
        </BannerStyled>
    )
}

export default MainBanner
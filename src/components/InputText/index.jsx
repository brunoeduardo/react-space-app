import styled from "styled-components"
import searchIcon from "./search.png"

const InputContainerStyle = styled.div`
    display: inline-block;
    position: relative;
`

const InputTextStyle = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const SearchIcon = styled.img`
    height: 38px;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 38px;
`

const InputText = (props) => {
    return(
        <InputContainerStyle>
            <InputTextStyle placeholder="What are you looking for?" {...props}/>
            <SearchIcon src={searchIcon} alt="Icon search"/>
        </InputContainerStyle>
    )
}

export default InputText
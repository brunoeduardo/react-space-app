import styled from "styled-components"
import InputText from "../InputText"

const HeaderStyled = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 60px 0;

    img {
        max-width: 212px;
    }
`

const Header = ({onChange}) => {
    return (<HeaderStyled>
        <img src="./images/logo.png" alt="Logo" />
        <InputText onChange={onChange}/>
    </HeaderStyled>)
}

export default Header
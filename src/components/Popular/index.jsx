import styled from "styled-components"
import Title from "../Title"
import imagesList from "../../images-list.json"

const PopularContainer = styled.section`
    align-content: center;
    display: flex;
    flex-direction: column;
`

const ListStyled = styled.ul`
    margin: 0;
    padding: 0;
    width: 212px;

    li {
        cursor: pointer;
        list-style: none;
        margin-bottom: 24px;
        
        img {
            border-radius: 15px;
            width: 100%;
        }
    }
`

const ButtonStyled = styled.button`
    background: none;
    border-radius: 10px;
    border: 2px solid #7B78E5;
    color: #fff;
    cursor: pointer;
    height: 56px;
`

const Popular = () => {
    return(<>
    <PopularContainer>
        <Title alignment='center'>Popular</Title>
        <ListStyled>
            {imagesList.map(item => (<li key={item.id}><img src={item.path} alt={item.title} /></li>))}
        </ListStyled>
        <ButtonStyled>More</ButtonStyled>
    </PopularContainer>

    </>)
}

export default Popular
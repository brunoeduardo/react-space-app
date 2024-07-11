import styled from "styled-components"

const TitleElement = styled.h2`
    color: #7B78E5;
    font-size: 30px;
    line-height: 38.5px;
    text-align: ${props => props.$alignment ? props.$alignment : 'left'};
`

const Title = ({children, alignment}) => {
    return(<>
        <TitleElement $alignment={alignment}>{children}</TitleElement>
    </>)
}

export default Title
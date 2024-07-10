import styled from "styled-components"

const ItemListStyled = styled.li`
    align-items: center;
    cursor: pointer;
    color: ${ props => props.$active ? '#7B78E5' : '#D9D9D9'} ;
    display: flex;
    font-size: 20px;
    gap: 16px;
    line-height: 29px;
    margin-bottom: 38px;
    font-family: ${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
`

const NavItem = ({children, iconActive, iconInactive, active = false}) => {
    return(<ItemListStyled $active={active}>
        <img src={active ? iconActive : iconInactive} alt="" />
        {children}
    </ItemListStyled>)
}

export default NavItem

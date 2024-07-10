import styled from "styled-components"
import NavItem from "./NavItem"


const ListStyled = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    padding-right: 24px;
    width: 212px;
`

const menuList = [
    {
        labelName: 'Home',
        iconActive: './icons/home-active.png',
        iconInactive: './icons/home-inactive.png',
        active: true
    },
    {
        labelName: 'Most Viewed',
        iconActive: './icons/most-viewed-active.png',
        iconInactive: './icons/most-viewed-inactive.png',
    },
    {
        labelName: 'Most Likes',
        iconActive: './icons/most-likes-active.png',
        iconInactive: './icons/most-likes-inactive.png',
    },
    {
        labelName: 'News',
        iconActive: './icons/news-active.png',
        iconInactive: './icons/news-inactive.png',
    },
    {
        labelName: 'Surprise Me',
        iconActive: './icons/surprise-me-active.png',
        iconInactive: './icons/surprise-me-inactive.png',
    }
]

const Aside = () => {
    return(
        <aside>
            <nav>
                <ListStyled>
                    {
                        menuList.map(itemMenu => (<NavItem key={itemMenu.labelName} iconActive={itemMenu.iconActive} iconInactive={itemMenu.iconInactive} active={itemMenu.active}>{itemMenu.labelName}</NavItem>))
                    }
                </ListStyled>
            </nav>
        </aside>
    )
}

export default Aside
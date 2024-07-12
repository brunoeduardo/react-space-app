import styled from "styled-components"
import tagsList from "./tags.json"
import { useState } from "react"

const TagsContainer = styled.div`
    align-items: center;
    display: flex;
    margin: 45px 0;
    width: 100%;
`

const Label = styled.h3`
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    padding-right: 20px;
`

const TagsContent = styled.section`
    display: flex;
    gap: 10px;
`

const ButtonTag = styled.button`
    background: #D9D9D94D;
    border: 2px solid transparent;
    border-color: ${props => props.$active ? '#7B78E5': '' } ;
    border-radius: 10px;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    line-height: 24px;
    padding:10px 8px;
    text-align: center;   
`

const Tags = ({tagFilter}) => {
    const [listTags, setListTags] = useState(tagsList);
    const filter = (value) => {
        tagFilter(value);
        setListTags(listTags.map(item => {
            item.id === value.id ? item['active'] = true : item['active'] = false;
            return item
        }) )
    }

    return(
        <TagsContainer>
            <Label>Search by tags:</Label>
            <TagsContent>
                {listTags.map(item => (<ButtonTag key={item.id} $active={item.active} onClick={() => {filter(item)}}>{item.title}</ButtonTag>))}
            </TagsContent>
        </TagsContainer>
    )
}

export default Tags
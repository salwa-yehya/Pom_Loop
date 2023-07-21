import styled , {css} from 'styled-components';
import { useContext } from 'react';
import { StateContext } from '../StateProvider';

const Tags = () => {
    const {activeTag , setAciveTag} = useContext(StateContext);
    const handleTagClick = (index)=>{
        setAciveTag(index);
    }
  return (
    <TagsContainer>
        {["work","Short Break","Long Brack"].map((tag , i)=>(
            <Tag onClick={()=>handleTagClick(i)} activeTag={activeTag === i} key={i}>{tag}</Tag>
          ))}
    </TagsContainer>
  )
}

export default Tags

const TagsContainer = styled.div`
    background-color :#111e24;
    height : 5rem ;
    width : 40rem ;
    margin : 0 auto ;
    border-radius : 5rem ;
    display : flex ;
    gap :1.5rem ;
    align-items :center;
`
const Tag =styled.button`
    all : unset ;
    height :4rem ;
    /* border : 2px solid #6fb69d; */
    text-align :center ;
    flex :1;
    font-size :2rem ;
    border-radius : 5rem ;
  

   ${({ activeTag }) => activeTag && css`
   background-color: #7a9e9f;
   
`}
`
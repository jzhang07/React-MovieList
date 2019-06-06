import styled from 'styled-components';
import logoPic from './statics/Netflix.png'



export const Logo = styled.div`
   height:56px;
   position: absolute;
   display:block;
   top:0;
   left:0;
   width:117px;
   height:49px;
   background:url(${logoPic});
   background-size: no-repeat;
`;
export const UlTemp = styled.ul`

margin-top:50px;
  
`
export const Page = styled.div`
 position: absolute;
 top:0px;
 left:0px;
 margin:0px;
 width:100%;
background-color: black;
color: white;
height:2000px;
display:flex;
flex-direction:column;
  
`
export const MyListItem = styled.li`
list-style:none; 
float:left;
text-align: center;
margin:10px 20px;
   
`
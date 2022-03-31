import styled from "styled-components";
import { Variables } from "./Variables";

const CollapsibleItem = styled.div`
cursor: pointer;
width: 100%;
border-bottom:2px solid ${Variables.Colors.borderColor};
transition-duration: 0.4s;
&:hover{
    background: ${Variables.Colors.borderColor};   
    transition: all 0.2s;
}

`;


const CollapsibleItemContent = styled.div`
display: none;
overflow-y: scroll;
max-height:150px;
text-indent: 10px;
`;

export const Collasible = { CollapsibleItem, CollapsibleItemContent }

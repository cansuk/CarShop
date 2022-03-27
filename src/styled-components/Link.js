import styled, { css } from "styled-components";
import { Variables } from "./Variables";


export const Link = styled.a`
cursor:pointer;
line-height:2;
href:${props => props.href};
color:${props => props.color || Variables.Colors.primaryColor};
text-decoration:none;

&:hover {
    opacity: 1;
    transition:opacity .1s ease;
    text-decoration:underline;
    cursor:pointer;
  }
  
${props =>
    props.active &&
    css`
        font-weight: 700;
        color:rgba(156,216,132,.85);
        text-decoration:underlined;
        `}  

`;
import styled, { css } from "styled-components";
import { Variables } from "./Variables";
import { NavLink } from "react-router-dom";

const { Colors } = Variables;

interface ILink {
    readonly active?: boolean;
}

export const Link = styled(NavLink) <ILink>`
cursor:pointer;
line-height:2;
color:${props => props.color || Colors.primaryColor};
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

export const MenuLink = styled(NavLink) <ILink>`
cursor:pointer;
line-height:2;
color:${props => props.color || Colors.fontColor};
text-decoration:none;

padding:10px 15px;

  
${props =>
        props.active &&
        css`
        font-weight: 700;
        color:${Colors.primaryColor};
        text-decoration:underlined;
        `}  

`;
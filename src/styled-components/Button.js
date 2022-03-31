import styled from "styled-components";
import { Variables } from "./Variables";

export const Button = styled.button`
position: relative;
background-color: ${props => props.active ? Variables.Colors.activeColor : Variables.Colors.primaryColor};
border: none;
font-size: 12px;
color: #FFFFFF;
padding: 5px;
width:128px;
height:32px;
text-align: center;
transition-duration: 0.4s;
text-decoration: none;
overflow: hidden;
cursor: pointer;

&:hover {
  box-shadow: ${props => props.animated ? "0 15px 15px rgba(0, 0, 0, 0.16)" : "unset"};
  transform: ${props => props.animated ? "translate(0, -5px)" : "unset"};
}

`
import styledComponents from "styled-components";
import { Variables } from "./Variables";

const { Colors } = Variables;

export const Text = styledComponents.p`
color:${props => props.disabled ? Colors.boxShadowColor : props.color || "unset"};
font-size:${props => props.size || "normal"};
font-weight:${props => props.weight || "400"};

&:hover{
    cursor: ${props => props.linkView ? "pointer" : "unset"};
    text-decoration: ${props => props.linkView ? "underline" : "unset"};    
    cursor: ${props => props.disabled ? "not-allowed" : "unset"}; 
}
`;

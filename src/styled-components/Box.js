import styledComponents from "styled-components";
import { Variables } from "./Variables";
import { RelativeContainer } from "./Layout";
const { Colors } = Variables;

export const Box = styledComponents.div`
    border:2px solid ${Colors.borderColor};
    padding:${props => props.padding || "unset"};
    height:${props => props.height || "unset"};
    border-radius:${props => props.rounded ? "30px" : "unset"};
    box-shadow: ${props => props.shadowed ? "1px 5px 10px  " + Colors.boxShadowColor : "unset"};    
`;

export const FilterBox = styledComponents(Box)`
    height:fit-content;
    overflow-y: auto;   
`;

export const BoxRelative = styledComponents(RelativeContainer)`
    border:2px solid ${Colors.borderColor};
    padding:${props => props.padding || "unset"};
`;



export const ScrollBox = styledComponents(Box)`
    overflow-y: scroll;
    max-height:150px;
`;

export const ColorBox = styledComponents(Box)`
    background-color:${props => props.backgroundColor};
    width:15px;
    height:15px;
    border-radius:15px;
`;

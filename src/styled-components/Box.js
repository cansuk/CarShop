import styledComponents from "styled-components";
import { Variables } from "./Variables";

export const Box = styledComponents.div`
    border:2px solid ${Variables.Colors.borderColor};;
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

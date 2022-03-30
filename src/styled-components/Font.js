import styledComponents from "styled-components";


export const Font = styledComponents.p`
font-size:${props => props.size || "normal"};
font-weight:${props => props.weight || "400"};
`;
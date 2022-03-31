import styled from "styled-components";

export const Padded = styled.div`
    padding:${props => props.padding || "unset"};
    padding-left:${props => props.horizontal || 0};
    padding-right:${props => props.horizontal || 0};
    padding-top:${props => props.vertical || 0};
    padding-bottom:${props => props.vertical || 0};
`;

import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:  ${props => props.justifyContent};
align-items:  ${props => props.alignItems};
gap:15px;
background-color: ${props => props.color || "unset"};
padding:${props => props.padding || 0};
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:  ${props => props.justifyContent};
  align-items:  ${props => props.alignItems};
  gap:15px;
  background-color: ${props => props.color || "unset"} ;
  flex:.9;
  padding:${props => props.padding || 0};
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:  ${props => props.justifyContent};
  align-items:  ${props => props.alignItems};
  gap:15px;
  background-color: ${props => props.color || "unset"};
  flex:.9;
  padding:${props => props.padding || 0};
`;

export const Column = styled.div`
  display:flex;
  flex: 25%;
  padding: 2px 2px;
  max-width: ${props => props.width || "100%"};
  justify-content:${props => props.justifyContent || "center"};
  align-items:${props => props.alignItems || "center"};
`;


export const Start = styled.div`
    display:flex;
    align-items:flex-start;
`;

export const End = styled.div`
    display:flex;
    justify-content:flex-end;
    flex-grow:1;
`;

export const Right = styled.div`
*:first-child{
    float:right;
}
`;
export const Left = styled.div`
*:first-child{
    float:left;
}
`;
import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap:wrap;
justify-content:  ${props => props.justifyContent};
align-items:  ${props => props.alignItems};
gap:${props => props.gap || "30px"};
background-color: ${props => props.color || "unset"};
padding:${props => props.padding || 0};
height:${props => props.height || "unset"};
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column; 
  flex-wrap:wrap;
  justify-content:  ${props => props.justifyContent};
  align-items:  ${props => props.alignItems};
  gap:15px;
  background-color: ${props => props.color || "unset"} ;
  flex:.9;
  padding:${props => props.padding || 0};
  height:${props => props.height || "unset"};
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:  ${props => props.justifyContent};
  align-items:  ${props => props.alignItems};
  gap:15px;
  background-color: ${props => props.color || "unset"};
  flex:.9;
  padding:${props => props.padding || 0};
  height:${props => props.height || "inherit"};
`;

export const Column = styled.div`
  display:flex;
  flex: 25%;
  padding: 2px 2px;
  max-width: ${props => props.width || "100%"};
  justify-content:${props => props.justifyContent || "center"};
  align-items:${props => props.alignItems || "center"};
  height:${props => props.height || "unset"};
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

export const RelativeContainer = styled.div`
position:relative;
`;

const PositionedContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content:start;
    flex-wrap:wrap;
`;

export const BottomLeftPositioned = styled(PositionedContainer)`
    bottom: 3px;
    left: 0px;
`;

export const BottomRightPositioned = styled(PositionedContainer)`
    bottom: 3px;
    right: 0px;
`;

export const TopLeftPositioned = styled(PositionedContainer)`
    top: 1px;
    left: 0px;
`;

export const TopRightPositioned = styled(PositionedContainer)`
    top: 1px;
    right: 0px;
`;

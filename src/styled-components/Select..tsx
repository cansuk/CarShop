import styled from "styled-components";
import { Variables } from "./Variables";


const SelectBase = styled.select`
    height:32px;
    border: 2px solid ${Variables.Colors.borderColor};
    font-size:${Variables.Fonts.normal};
`;

export const Select = styled(SelectBase)`
  name:${props => props.name}
  width: 100%;
  box-sizing: border-box;  
  font-family:inherit;  
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;

  &:focus{
    color:${props => props.color || "unset"};
    border:1px solid ${Variables.Colors.primaryColor};
  }
`;
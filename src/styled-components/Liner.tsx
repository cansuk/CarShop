import styledComponents from "styled-components";
import { Variables } from "./Variables";

const { Colors } = Variables

export const Liner = styledComponents.hr`
border: 2px solid ${Colors.borderColor};
`;
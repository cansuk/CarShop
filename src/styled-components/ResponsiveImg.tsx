import styled from "styled-components";

export const ResponsiveImage = styled.img`
width:${props => props.width};    
height:${props => props.height};    
max-width: 100%;    
height: auto;
src: ${props => props.src};  
`;

export const ResponsiveImageSvg = styled.object`
width:${props => props.width};    
height:${props => props.height};    
// max-width: 100%;       
// max-height: 100%;    
// height: auto;
viewBox="113 128 972 600";
background-size: contain;
:firstChild svg {
    // viewBox="113 128 972 600";
    // color:red;
    // background-color:yellow;
    background-size: cover;
} 
data: ${props => props.data}; 
`;

export const BackgroundImageSvg = styled.div`
background: ${props => `url(${props.url})`} no-repeat center;
width:80px;
background-size:contain;
`;
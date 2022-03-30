import React from 'react'
import { Box, ColorBox } from '../styled-components/Box';
import { Column, ColumnContainer, Container, Row, RowContainer } from '../styled-components/Layout';
import { Link } from '../styled-components/Link';
import { BackgroundImageSvg, ResponsiveImage, ResponsiveImageSvg } from '../styled-components/ResponsiveImg';
import { GiFuelTank } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';

const CarTile = ({ car }) => {
    const pictureUrl = 'https://img-pa.auto1.com/imge0/93/e0933f2307ea4a7b849986da2944810d/pa/max-MV18877_295677b156e64aa8c5e4f59c49e74391.jpeg' || car["pictureUrl"] || "https://react.semantic-ui.com/images/wireframe/image.png"; // fallback image set
    const color = car.color || "-";
    const stock = car.stockNumber ? `Stock # ${car.stockNumber}` : "Stock info missing";
    const { number, unit } = car.mileage;
    const mileageInfo = number ? `${number} ${unit}` : "Mileage info missing";
    const fuelType = car.fuelType || "Fuel type info missing"
    const { modelName = "Model name missing" } = car;

    return (
        <Box>
            <Container padding={"20px"}>
                <BackgroundImageSvg url={pictureUrl} width="150" />
                <ColumnContainer>
                    <h3> {modelName} </h3>
                    <RowContainer> {stock} - <IoMdSpeedometer /> {mileageInfo} - <GiFuelTank /> {fuelType} -  <ColorBox backgroundColor={color} /> {color}  </RowContainer>
                    <Link to={`/details/${car.stockNumber}`}> View Details  </Link>
                </ColumnContainer>
            </Container>
        </Box>
    )
}

export default CarTile;
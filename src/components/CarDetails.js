import React, { useEffect, useState } from 'react'
import { RowContainer, ColumnContainer, Right, Container, BottomRightPositioned } from '../styled-components/Layout'
import { GiFuelTank } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdNotificationsActive } from 'react-icons/md';
import { Box, BoxRelative, ColorBox } from '../styled-components/Box';
import { Button } from '../styled-components/Button';
import { useParams } from "react-router-dom";
import { carsServices } from '../api/Cars';
import { Padded } from '../styled-components/Spacing';
import { Constants } from '../constants';

export const CarDetails = () => {
    let params = useParams();
    const stock = { params };
    const [car, setCar] = useState(null);
    const { getCarsByStockNumber } = carsServices;
    const { messages } = Constants;
    const { stockPositiveMsg, stockNegativeMsg } = messages;


    useEffect(() => {

        getCarsByStockNumber(stock).then(({ car }) => {
            setCar(car);
        }).catch((err) => {
            // TODO error handle
            setCar([]);
        });

    }, []);


    const handleSave = () => {
        debugger;
    }

    return (car === null ? <> Loading . . . </> :
        car.length === 0 ?
            <Container padding={"45px"} justifyContent="center">
                <BoxRelative>
                    <Padded vertical="100px" horizontal="50px">
                        {stockNegativeMsg}
                        <BottomRightPositioned> <Button onClick={() => handleSave({ car })}> <MdNotificationsActive /> Notify me when available </Button> </BottomRightPositioned>
                    </Padded>
                </BoxRelative>
            </Container> :

            <Container padding={"45px"}>
                <RowContainer>
                    <ColumnContainer>
                        <h3> {car.modelName} </h3>
                        <RowContainer> Stock # ${car.stockNumber} - <IoMdSpeedometer /> {car.mileage.number} {car.mileage.unit} - <GiFuelTank /> {car.fuelType} -  <ColorBox backgroundColor={car.color} /> {car.color}  </RowContainer>
                        <p>
                            This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in . . .
                        </p>
                    </ColumnContainer >
                    <ColumnContainer>
                        <BoxRelative>
                            <Padded vertical="100px" horizontal="50px">
                                {stockPositiveMsg}
                                <BottomRightPositioned> <Button onClick={() => handleSave({ car })}> Save </Button> </BottomRightPositioned>
                            </Padded>
                        </BoxRelative>
                    </ColumnContainer>
                </RowContainer >
            </Container>



    )
}

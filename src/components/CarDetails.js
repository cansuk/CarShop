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
import { getManagedArr, updateLocalStorage } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/reducers/favoriteReducer';

const CarDetails = () => {
    let params = useParams();
    const stock = { params };
    const [car, setCar] = useState(null);
    const { getCarsByStockNumber } = carsServices;
    const { messages } = Constants;
    const { stockPositiveMsg, stockNegativeMsg, addToFavoritesMsg, removeFromFavoritesMsg } = messages;

    const dispatch = useDispatch();
    let listIds = useSelector(state => state.favoriteReducer.listIds);

    useEffect(() => {

        getCarsByStockNumber(stock).then(({ car }) => {
            setCar(car);
        }).catch((err) => {
            // TODO error handle
            setCar([]);
        });

    }, []);


    const handleNotify = ({ car }) => {
        /**
         * TODO IMPLEMENT 
         * REQUIREMENT : API ENDPOINT
         */
    }

    const handleStorage = ({ operation, car }) => {
        const stockNumber = car.stockNumber;
        let ids = getManagedArr(listIds, stockNumber);

        if (operation === "save") {
            dispatch(addToFavorites({ ids }));
        }
        else if (operation === "remove") {
            dispatch(removeFromFavorites({ id: stockNumber }));
        }
        updateLocalStorage(ids);
    }

    return (car === null ? <> Loading . . . </> :
        car.length === 0 ?
            <Container padding={"45px"} justifyContent="center">
                <BoxRelative>
                    <Padded vertical="100px" horizontal="50px">
                        {stockNegativeMsg}
                        <BottomRightPositioned> <Button onClick={() => handleNotify({ car })}> <MdNotificationsActive /> Notify me when available </Button> </BottomRightPositioned>
                    </Padded>
                </BoxRelative>
            </Container> :

            <Container padding={"45px"}>
                <RowContainer>
                    <ColumnContainer>
                        <h3> {car.modelName} </h3>
                        <RowContainer> Stock # ${car.stockNumber} - <IoMdSpeedometer /> {car.mileage.number} {car.mileage.unit} - <GiFuelTank /> {car.fuelType} -  <ColorBox backgroundColor={car.color} /> {car.color}  </RowContainer>
                        {stockPositiveMsg}
                    </ColumnContainer >
                    <ColumnContainer>
                        <Box shadowed>
                            {
                                listIds?.findIndex(x => x === car.stockNumber) === -1 ?
                                    <Padded vertical="100px" horizontal="50px">
                                        {addToFavoritesMsg}
                                        <Right>
                                            <Padded vertical="30px" horizontal="30px">
                                                <Button animated onClick={() => handleStorage({ operation: "save", car })}> Save </Button>
                                            </Padded>
                                        </Right>
                                    </Padded> :
                                    <Padded vertical="100px" horizontal="50px">
                                        {removeFromFavoritesMsg}
                                        <Right>
                                            <Padded vertical="30px" horizontal="30px">
                                                <Button animated onClick={() => handleStorage({ operation: "remove", car })}> Remove </Button>
                                            </Padded>
                                        </Right>
                                    </Padded>
                            }

                        </Box>
                    </ColumnContainer>
                </RowContainer >
            </Container>



    )
}
export default CarDetails;
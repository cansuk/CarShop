import React, { useEffect, useState } from 'react'
import { RowContainer, ColumnContainer, Right, Container, BottomRightPositioned } from '../styled-components/Layout'
import { GiFuelTank } from 'react-icons/gi';
import { IoMdSpeedometer } from 'react-icons/io';
import { MdLocalDining, MdNotificationsActive } from 'react-icons/md';
import { Box, BoxRelative, ColorBox } from '../styled-components/Box';
import { Button } from '../styled-components/Button';
import { useParams } from "react-router-dom";
import { carsServices } from '../api/Cars';
import { Padded } from '../styled-components/Spacing';
import { Constants } from '../constants';
import { getManagedArr, updateLocalStorage } from '../utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/reducers/favoriteReducer';
import { RootState } from '../redux/reducers/rootReducer';

const CarDetails = () => {
    let params = useParams<{ stock: string }>();
    const { stock } = params;
    const [car, setCar] = useState<ICar | null | undefined>(null);
    const { getCarsByStockNumber } = carsServices;
    const { messages } = Constants;
    const { stockPositiveMsg, stockNegativeMsg, addToFavoritesMsg, removeFromFavoritesMsg } = messages;

    const dispatch = useDispatch();
    let listIds = useSelector((state: RootState) => state.favoriteReducer.listIds);

    useEffect(() => {
        if (stock) {
            getCarsByStockNumber(parseInt(stock)).then((result) => {
                const { car } = result;
                setCar(car);
            }).catch((err) => {
                // TODO error handle
                setCar(null);
            });

        }

    }, []);


    const handleNotify = ({ car }: { car: ICar }) => {
        /**
         * TODO IMPLEMENT 
         * REQUIREMENT : API ENDPOINT
         */
    }
    interface ICar {
        stockNumber: number;
        manufacturerName?: string;
        modelName?: string;
        mileage?: IMileage;
        fuelType?: string;
        color?: string;
        pictureUrl?: string;
    }

    interface IMileage {
        number?: number;
        unit?: string;
    }
    const handleStorage = ({ operation, car }: { operation: "save" | "remove", car: ICar }) => {
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

    // (car === null || car === undefined ? <> Loading . . . </> :
    //     car === 0 ?
    //         <Container padding={"45px"} justifyContent="center">
    //             <BoxRelative>
    //                 <Padded vertical="100px" horizontal="50px">
    //                     {stockNegativeMsg}
    //                     <BottomRightPositioned> <Button onClick={() => handleNotify({ car })}> <MdNotificationsActive /> Notify me when available </Button> </BottomRightPositioned>
    //                 </Padded>
    //             </BoxRelative>
    //         </Container> :

    return car ? <Container padding={"45px"}>
        <RowContainer>
            <ColumnContainer>
                <h3> {car.modelName} </h3>
                <RowContainer> Stock # ${car.stockNumber} - <IoMdSpeedometer /> {car.mileage?.number} {car.mileage?.unit} - <GiFuelTank /> {car.fuelType} -  <ColorBox backgroundColor={car.color} /> {car.color}  </RowContainer>
                {stockPositiveMsg}
            </ColumnContainer >
            <ColumnContainer>
                <Box shadowed>
                    {
                        listIds?.findIndex((x: number) => x === car.stockNumber) === -1 ?
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
        :
        <></>;


}
export default CarDetails;
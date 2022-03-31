import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsServices } from '../api/Colors';
import { Column, Container, Right, Row, RowContainer } from '../styled-components/Layout';
import Header from './Header';
import CarList from './CarList';
import FilterBox from './FilterBox';
import Footer from './Footer';
import { Liner } from '../styled-components/Liner';
import { setActiveMenu } from '../redux/reducers/mainReducer';
import Scroll from './Scroll';

const Home = () => {
    const [state, setState] = useState({ params: null });
    const dispatch = useDispatch();
    const handleFilter = (params) => {
        debugger;
        setState({ ...state, params });
    }
    useEffect(() => {
        dispatch(setActiveMenu({ name: null }));
    }, []);

    return (
        <>

            <Container padding={"45px"}>
                <FilterBox handleFilter={handleFilter} />
                <CarList params={state.params} />
            </Container>

            <Scroll />

            <Liner />

            <Footer />



        </>
    )
}

export default Home;
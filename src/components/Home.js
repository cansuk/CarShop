import React, { useEffect, useState } from 'react';
import { colorsServices } from '../api/Colors';
import { Column, Container, Row, RowContainer } from '../styled-components/Layout';
import Header from './Header';
import CarList from './CarList';
import FilterBox from './FilterBox';
const Home = () => {
    const [state, setState] = useState({ params: null });
    const handleFilter = (params) => {
        setState({ ...state, params });
    }

    return (
        <>

            <Header />

            <hr />

            <Container padding={"45px"}>
                <FilterBox handleFilter={handleFilter} />
                <CarList params={state.params} />
            </Container>


        </>
    )
}

export default Home;
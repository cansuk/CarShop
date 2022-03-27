import React, { useEffect, useState } from 'react'
import shortid from 'shortid';
import { carsServices } from '../api/Cars';
import { Constants } from '../constants';
import { ColumnContainer, Container, Row, RowContainer } from '../styled-components/Layout'
import CarTile from './CarTile'
import { Paginator } from './Paginator';
import SortBox from './SortBox';

const CarList = ({ params }) => {
    const [state, setState] = useState({ cars: [], totalPageCount: 0, totalCarsCount: 0 });

    const handlePaginationChange = ({ activePage }) => {
        const criteria = { ...params, page: activePage };
        carsServices.getCars(criteria).then(({ cars, totalPageCount, totalCarsCount }) => {
            setState({ ...state, cars, totalPageCount, totalCarsCount });
        }).catch(err => {
            // TODO handle error
            console.error(err);
        });
    }

    useEffect(() => {
        carsServices.getCars(params).then(({ cars, totalPageCount, totalCarsCount }) => {
            setState({ ...state, cars, totalPageCount, totalCarsCount });
        });
    }, [params]);

    const { paginatorOptions, sortOptions } = Constants;

    const handleSort = (e) => {
        debugger;
        const { value } = e.target;
        sortOptions.forEach(x => {
            x.selected = (x.value === value);
        });
        const criteria = { ...params, sort: value };
        carsServices.getCars(criteria).then(({ cars, totalPageCount, totalCarsCount }) => {
            setState({ ...state, cars, totalPageCount, totalCarsCount });
        }).catch(err => {
            // TODO handle error
            console.error(err);
        });
    }

    return (
        <ColumnContainer>
            <RowContainer justifyContent="space-between">

                <ColumnContainer>

                    <h3>Available Cars</h3>

                    <p>Showing {state.totalCarsCount < paginatorOptions.itemCountPerPage ? state.totalCarsCount : paginatorOptions.itemCountPerPage} of {state.totalCarsCount} results</p>


                </ColumnContainer>

                <SortBox options={sortOptions} onSort={handleSort} />

            </RowContainer>

            {state?.cars.map(car => <CarTile car={car} key={shortid.generate()} />)}

            <Paginator defaultActivePage={1} totalPages={state.totalPageCount} handlePaginationChange={handlePaginationChange} />

        </ColumnContainer>
    )
}

export default CarList
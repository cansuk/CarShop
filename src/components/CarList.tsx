import React, { useEffect, useState } from 'react'
import shortid from 'shortid';
import { carsServices } from '../api/Cars';
import { Constants } from '../constants';
import { ColumnContainer, Container, RowContainer } from '../styled-components/Layout'
import CarTile from './CarTile'
import Footer from './Footer';
import { Paginator } from './Paginator';
import SortBox from './SortBox';

const CarList = ({ params }: { params: ICarFilter }) => {
    // const [state, setState] = useState<ICars | null | undefined>({ cars: ICars[], totalPageCount: 0, totalCarsCount: 0 });

    const initialState: ICars = { cars: [], totalPageCount: 0, totalCarsCount: 0 };
    const [state, setState] = useState<ICars>(initialState);

    const { getCars, getCarsByCriteria } = carsServices;

    const handlePaginationChange = ({ activePage }: { activePage: number }) => {
        const criteria = { ...params, page: activePage };
        //getCarsByCriteria(criteria).then(({ cars, totalPageCount, totalCarsCount }: { cars: ICar[], totalPageCount: number | ındefined, totalCarsCount: number | undefined }) => {
        getCarsByCriteria(criteria).then((result) => {
            const { cars, totalPageCount, totalCarsCount } = result;
            setState({ ...state, cars, totalPageCount, totalCarsCount });
        }).catch(err => {
            // TODO handle error
            console.error(err);
        });
    }

    useEffect(() => {
        // debugger;
        console.log(params)
        if (params) {
            getCarsByCriteria(params).then(({ cars, totalPageCount, totalCarsCount }) => {
                setState({ ...state, cars, totalPageCount, totalCarsCount });
            });

        } else {
            getCars().then((result: ICars) => {
                const { cars, totalPageCount, totalCarsCount } = result;
                setState({ ...state, cars, totalPageCount, totalCarsCount });
            });

        }
    }, [params]);

    const { paginatorOptions, sortOptions } = Constants;

    const handleSort = (e: Event) => {
        debugger;
        if (e.target) {
            const value: ISort | unknown = (e.target as HTMLSelectElement).value as ISort | unknown;
            sortOptions.forEach(x => {
                x.selected = (x.value === value);
            });

            const criteria: ICarFilter = { ...params, sort: value };
            getCarsByCriteria(criteria).then(({ cars, totalPageCount, totalCarsCount }) => {
                setState({ ...state, cars, totalPageCount, totalCarsCount });
            }).catch(err => {
                // TODO handle error
                console.error(err);
            });
        }
    }

    return (
        <ColumnContainer>
            <RowContainer justifyContent="space-between">

                <ColumnContainer>

                    <h3>Available Cars</h3>

                    <p> Showing {state?.totalCarsCount && state?.totalCarsCount < paginatorOptions.itemCountPerPage ? state.totalCarsCount : paginatorOptions.itemCountPerPage} of {state.totalCarsCount} results</p>


                </ColumnContainer>

                <SortBox options={sortOptions} onSort={handleSort} />

            </RowContainer>

            {state?.cars?.map(car => <CarTile car={car} key={shortid.generate()} />)}

            <Paginator defaultActivePage={1} totalPages={state.totalPageCount} handlePaginationChange={handlePaginationChange} />

        </ColumnContainer>

    )
}

export default CarList
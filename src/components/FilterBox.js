import React, { useEffect, useReducer } from 'react';
import { colorsServices } from '../api/Colors';
import { manufacturersService } from '../api/Manufacturers';
import { FilterBox as Box } from '../styled-components/Box';
import { Button } from '../styled-components/Button';
import { ColumnContainer, Right } from '../styled-components/Layout';
import { Lib } from '../utils/lib';
import Select from './Select';
import SelectCheckbox from './SelectCheckbox';

const FilterBox = ({ handleFilter }) => {
    const initialState = {
        colors: [],
        manufacturers: [],
        filterParams: {}
    }

    const ActionTypes = {
        SET_COLORS: "SET_COLORS",
        SET_MANUFACTURERS: "SET_MANUFACTURERS",
        SET_FILTER: "SET_FILTER",
        RESET_FILTER: "RESET_FILTER"
    }

    const filterReducer = (state, action) => {
        switch (action.type) {
            case ActionTypes.SET_COLORS:
                return { ...state, colors: action.colorsOptions };
            case ActionTypes.SET_MANUFACTURERS:
                return { ...state, manufacturers: action.manufacturers };
            case ActionTypes.SET_FILTER:
                return {
                    ...state, filterParams: { ...action.filterParams }
                };
            case ActionTypes.RESET_FILTER:
                return {
                    ...initialState
                };
            default:
                throw new Error("Something went wrong...");
        }
    }
    const [state, dispatch] = useReducer(filterReducer, initialState);

    const { colors, manufacturers, filterParams } = state;

    useEffect(() => {
        colorsServices.getColors().then(({ colors }) => {
            const colorsOptions = colors.reduce((acc, curr) => [...acc, { text: curr, value: curr, selected: false }], []);
            dispatch({ type: ActionTypes.SET_COLORS, colorsOptions });
        });

        manufacturersService.getManufacturers().then(({ manufacturers }) => {
            dispatch({ type: ActionTypes.SET_MANUFACTURERS, manufacturers });
        });

    }, []);

    const handleSelect = (e) => {
        const { name, checked } = e.target;
        let value;
        switch (name) {
            case "Color":
                value = e.target.value;
                colors.forEach(x => {
                    x.selected = (x.value === value);
                });
                break;
            case "Manufacturer":
                value = e.target.getAttribute("value");
                manufacturers.filter(x => x.name === value)[0].checked = checked;
                break;
            default:
                break;
        }
        const params = {};
        params[name] = value;
        dispatch({ type: ActionTypes.SET_FILTER, filterParams: { ...filterParams, ...params } });
    }

    return (
        <Box>
            <ColumnContainer padding={"45px"}>

                {colors.length > 0 ? <Select options={colors} label={"Color"} onChange={handleSelect} /> : "Loading . . ."}

                {manufacturers.length > 0 ? <SelectCheckbox options={manufacturers} label={"Manufacturer"} grouped onChange={handleSelect} /> : "Loading . . ."}

                <Right> <Button onClick={() => handleFilter(filterParams)}> Filter </Button> </Right>

                <Right>
                    <Button onClick={() => {
                        dispatch({ type: ActionTypes.RESET_FILTER });

                        // dispatch({ type: ActionTypes.SET_COLORS, colorsOptions: colors.reduce((acc, curr) => [...acc, { text: curr, value: curr, selected: false }], []) });
                        dispatch({ type: ActionTypes.SET_COLORS, colorsOptions: colors.map(x => { x.selected = false; return x; }) });

                        dispatch({ type: ActionTypes.SET_MANUFACTURERS, manufacturers: manufacturers.map(x => { x.checked = false; return x; }) });

                        handleFilter(initialState.filterParams);
                    }}> Reset Filter
                    </Button>
                </Right>

            </ColumnContainer>

        </Box>
    )
}

export default FilterBox;
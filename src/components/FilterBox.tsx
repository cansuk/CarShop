import React, { useEffect, useReducer } from 'react';
import { colorsServices } from '../api/Colors';
import { manufacturersService } from '../api/Manufacturers';
import { RootState } from '../redux/reducers/rootReducer';
import { FilterBox as Box } from '../styled-components/Box';
import { Button } from '../styled-components/Button';
import { ColumnContainer, Container, Right } from '../styled-components/Layout';
import { Padded } from '../styled-components/Spacing';
import Select from './Select';
import SelectCheckbox from './SelectCheckbox';

type Props = {
    handleFilter: Event
}

const FilterBox = ({ handleFilter }: Props) => {
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
            const selectAllColors = { text: "All car colors", value: "All car colors", selected: true }
            const colorsOptions = colors.reduce((acc, curr) => [...acc, { text: curr, value: curr, selected: false }], []);
            dispatch({ type: ActionTypes.SET_COLORS, colorsOptions: [selectAllColors, ...colorsOptions] });
        });

        manufacturersService.getManufacturers().then(({ manufacturers }) => {
            const selectAllManufacturers = { value: "All manufacturers", name: "All manufacturers", checked: true };
            manufacturers.map(x => { x.checked = true; return x; });

            dispatch({ type: ActionTypes.SET_MANUFACTURERS, manufacturers: [selectAllManufacturers, ...manufacturers] });
        });

    }, []);

    const handleSelect = (e) => {
        const { name, checked } = e.target;
        let value;
        const params = {};

        switch (name) {
            case "Color":
                value = e.target.value;
                colors.forEach(x => {
                    x.selected = (x.value === value);
                });
                if (value !== "All car colors") {
                    params[name] = value;
                } else {
                    params[name] = "";
                }
                break;
            case "Manufacturer":
                value = e.target.getAttribute("value");
                if (value === "All manufacturers") {
                    manufacturers.map(x => { x.checked = checked; return x; });
                } else {
                    manufacturers.filter(x => x.name === value)[0].checked = checked;
                }
                if (value !== "All manufacturers") {
                    params[name] = value;
                } else {
                    params[name] = "";
                }
                break;
            default:
                break;
        }


        dispatch({ type: ActionTypes.SET_FILTER, filterParams: { ...filterParams, ...params } });
    }

    return (
        <Box>
            <ColumnContainer padding={"45px"}>

                {colors.length > 0 ? <Select options={colors} label={"Color"} onChange={handleSelect} /> : "Loading . . ."}
                <Padded vertical="10px" />

                {manufacturers.length > 0 ? <SelectCheckbox options={manufacturers} label={"Manufacturer"} grouped onChange={handleSelect} /> : "Loading . . ."}



                <Right> <Button animated onClick={() => handleFilter(filterParams)}> Filter </Button> </Right>

                <Right>
                    <Button animated onClick={() => {
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
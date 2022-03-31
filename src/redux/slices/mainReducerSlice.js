import { createSlice } from '@reduxjs/toolkit';

export const mainReducerSlice = createSlice({
    name: "mainReducer",
    initialState: {
        activeNavMenu: null
    },
    reducers: {
        setActiveMenu: (state, { payload }) => {
            const { name } = payload;
            state.activeNavMenu = name;
        }
    }
});

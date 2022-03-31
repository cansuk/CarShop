import { createSlice } from '@reduxjs/toolkit';

export const favoriteReducerSlice = createSlice({
    name: "favoriteReducer",
    initialState: {
        listIds: JSON.parse(window.localStorage.getItem('a1FavStorage'))?.["favoriteCars"] || {}
    },
    reducers: {
        addToFavorites: (state, { payload }) => {
            const { ids } = payload;
            state.listIds.push(ids);
            state.listIds = state.listIds.flat();
        },
        removeFromFavorites: (state, { payload }) => {
            const { id } = payload;
            const predicate = (el) => el === id;
            const arr = state.listIds.flat();
            let index = arr.findIndex(predicate);
            state.listIds.splice(index, 1);
        },
    }
});

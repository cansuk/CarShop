import { createSlice } from '@reduxjs/toolkit';
const storage = window.localStorage.getItem('a1FavStorage');
export const favoriteReducerSlice = createSlice({
    name: "favoriteReducer",
    initialState: {
        listIds: JSON.parse(storage || "")?.["favoriteCars"] || {}
    },
    reducers: {
        addToFavorites: (state, { payload }) => {
            const { ids } = payload;
            state.listIds.push(ids);
            state.listIds = state.listIds.flat();
        },
        removeFromFavorites: (state, { payload }) => {
            const { id } = payload;
            const predicate = (el: number) => el === id;
            const arr = state.listIds.flat();
            let index = arr.findIndex(predicate);
            state.listIds.splice(index, 1);
        },
    }
});

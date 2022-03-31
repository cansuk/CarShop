import { favoriteReducerSlice as favoriteReducer } from "../slices/favoriteReducerSlice";

export const { addToFavorites, removeFromFavorites } = favoriteReducer.actions;

export default favoriteReducer.reducer;
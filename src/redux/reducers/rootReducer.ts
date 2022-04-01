import { combineReducers } from "@reduxjs/toolkit";
import favoriteReducer from "./favoriteReducer";
import mainReducer from "./mainReducer";

export const rootReducer = combineReducers({
    mainReducer: mainReducer,
    favoriteReducer: favoriteReducer
});

export type RootState = ReturnType<typeof rootReducer>
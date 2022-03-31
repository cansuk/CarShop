import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./reducers/mainReducer";
import favoriteReducer from "./reducers/favoriteReducer";

export default configureStore({
    reducer: {
        mainReducer,
        favoriteReducer
    },
})
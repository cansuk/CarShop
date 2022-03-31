import { mainReducerSlice as mainReducer } from "../slices/mainReducerSlice";

export const { setActiveMenu } = mainReducer.actions;

export default mainReducer.reducer;
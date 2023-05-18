import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "weather",
    initialState: {
        data: {},
    },
    reducers: {
        fetchWeather: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { fetchWeather } = counterSlice.actions;

export default counterSlice.reducer;

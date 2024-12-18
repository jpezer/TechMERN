import { createSlice } from "@reduxjs/toolkit";

const getSymbol = (currency) => {
    if (localStorage.currency === "EUR") return "€";
    if (localStorage.currency === "USD") return "$";
    if (localStorage.currency === "BAM") return "KM";
    return "€";
};

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currency: localStorage.currency ? localStorage.currency : "EUR",
        symbol: getSymbol(),
    },
    reducers: {
        setCurrency: (state, action) => {
            state.currency = action.payload;
            if (state.currency === "EUR") state.symbol = "€";
            if (state.currency === "USD") state.symbol = "$";
            if (state.currency === "BAM") state.symbol = "KM";
            console.log("state currency", state.currency);
            console.log("state symbol", state.symbol);
        },
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;

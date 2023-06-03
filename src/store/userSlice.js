import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from "@reduxjs/toolkit";

const initialState = { inputData: {
    fname: "",
    email: "",
}, isAuthenticated: false }

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.inputData = action.payload;
        },
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    }
})

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
    }
});

export const {addUser, login, logout} = userSlice.actions;
export default store;

import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from "../utils/fetchLocalStorageData";

// const userInfo = fetchUser();
// const cartInfo = fetchCart();

export const initialState = {
    user: {},
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginReducer: (state, action) => {
            console.log(action.payload)
            state.user = action.payload
        },
        logoutReducer: (state, action) => {
            state.user = {}
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginReducer, logoutReducer } = userSlice.actions

export default userSlice.reducer
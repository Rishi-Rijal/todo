import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: {}
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{
        login : (state, action)=>{
            state.status = true
            state.userData = action.payload; 
        },

        logout: (state,action)=>{
            state.status = false
            state.userData = {}
        }
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer
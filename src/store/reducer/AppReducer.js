import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LoginUser: false,
    UserDetail: [],
    Token: '',
    Reports:[]
}

export const AppReducer = createSlice({
    name: 'Lab1',
    initialState,
    reducers: {
        LoginUser: (state, action) => {
            state.LoginUser = action.payload
        },
        LogOutUser: (state, action) => {
            state.LoginUser = action.payload,
                state.Token = ''
        },
        UserDetail: (state, action) => {
            state.UserDetail = action.payload
        },
        Token: (state, action) => {
            state.Token = action.payload
        },
        Reports: (state, action) => {
            state.Reports = action.payload
        },
    },
})


export const { LoginUser, LogOutUser, UserDetail, Token, Reports, } = AppReducer.actions
export default AppReducer.reducer

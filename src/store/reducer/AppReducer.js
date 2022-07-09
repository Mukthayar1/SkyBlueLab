import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    LoginUserIs: false,
    UserDetail: [],
    Token: '',
    Reports:[]
}

export const AppReducer = createSlice({
    name: 'Lab1',
    initialState,
    reducers: {
        LoginUserIs: (state, action) => {
            state.LoginUserIs = action.payload
        },
        LogOutUser: (state, action) => {
            state.LoginUserIs = action.payload,
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


export const { LoginUserIs, LogOutUser, UserDetail, Token, Reports, } = AppReducer.actions
export default AppReducer.reducer

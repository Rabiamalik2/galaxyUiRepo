import { createSlice } from '@reduxjs/toolkit'
import { setUserAction } from '../actions/user-actions'

const initialState = {
    user: null,
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUser: setUserAction,
    },
})

export const { setUser } = userReducer.actions

export default userReducer.reducer
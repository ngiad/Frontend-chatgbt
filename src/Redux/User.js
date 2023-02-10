import { createSlice } from "@reduxjs/toolkit"


export const User = createSlice({
    name : "User",
    initialState : {},
    reducers:{
        update : (state,action) => {
            return state = action.payload
        }
    }
})

export const { update } = User.actions

export default User.reducer
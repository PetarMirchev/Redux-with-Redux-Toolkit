import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "AnaBG",
        email: "zxcvf@example.com",
    },
    reducers:{
        update: (state, action) => {
            //action.payload = {"Budala69", 'mySpamEmail@gmail.com'} 
            state.name = action.payload.name;
            state.email = action.payload.email;
        }
    }
});

export const {update} = userSlice.actions;
export default userSlice.reducer;


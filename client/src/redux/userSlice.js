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
        },
        remove: (state) => (state = {}), //delete user   //state = null; 

        addHello: (state, action) => {
            state.name = 'Hello ' + action.payload.name;
        }    
    },
});

export const {update, remove , addHello} = userSlice.actions;
export default userSlice.reducer;


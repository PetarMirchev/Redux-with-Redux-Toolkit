import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
            userInfo: {
              name: "AnaBG",
              email: "zxcvf@example.com",  
            },
            pending: null,
            error: false,   
    },
    reducers:{

        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.pending = false;
            state.userInfo= action.payload;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        }


        //local test actions:
        // update: (state, action) => {
        //     //action.payload = {"Budala69", 'mySpamEmail@gmail.com'} 
        //     state.name = action.payload.name;
        //     state.email = action.payload.email;
        // },
        // remove: (state) => (state = {}), //delete user   //state = null; 

        // addHello: (state, action) => {
        //     state.name = 'Hello ' + action.payload.name;
        // }    
    },
});

export const {updateStart, updateSuccess , updateError} = userSlice.actions;

//export const {update, remove , addHello} = userSlice.actions;
export default userSlice.reducer;


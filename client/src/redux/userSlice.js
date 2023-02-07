import { createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "nameX",
        email: "zxcv@example.com",
    },
    reducers:{
        update: (state, action) => {
            
        }
    }
});
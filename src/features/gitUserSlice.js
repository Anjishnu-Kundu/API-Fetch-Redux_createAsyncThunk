import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//action
export const getAllData = createAsyncThunk("gitUsers", async() => {
    const response = await fetch("https://api.github.com/users");
    const result = response.json();
    return result;
})

//you would use extrareducers when you are dealing with actions that you have already defined

export const gitUser = createSlice({
    name: "gitUser",
    initialState: {
        users: [],
        loading: false,
        error: null
    }, 
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state) => {
            state.loading = true
        });
        builder.addCase(getAllData.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getAllData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export default gitUser.reducer;
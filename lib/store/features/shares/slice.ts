import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShares = createAsyncThunk('shares/fetchShares', async () => {
    const response = await axios.get('https://stock-exchange.fancy-app.site/api/shares');
    return response.data;
});

const sharesSlice = createSlice({
    name: 'shares',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchShares.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchShares.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchShares.rejected, (state, action) => {
                state.status = 'failed';
                // @ts-ignore
                state.error = action.error.message;
            });
    },
});
export const { setData } = sharesSlice.actions;
export default sharesSlice.reducer;

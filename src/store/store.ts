import { configureStore } from '@reduxjs/toolkit';
import sharesReducer from './features/shares/slice';

const store = configureStore({
    reducer: {
        shares: sharesReducer,
    },
});

export default store;

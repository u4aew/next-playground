'use client';

import { configureStore } from '@reduxjs/toolkit';
import shares from './features/shares/slice';

export const store = configureStore({
    reducer: { shares },
});

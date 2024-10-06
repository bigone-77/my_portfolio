import { configureStore } from '@reduxjs/toolkit';

import swiperReducer from './features/swiperReducer';

export const store = configureStore({
  reducer: {
    swiperReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

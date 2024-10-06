import { configureStore, combineReducers } from '@reduxjs/toolkit';

import swiperReducer from './features/swiperReducer';
import toggleMenuReducer from './features/toggleMenuReducer';

const rootReducer = combineReducers({
  swiper: swiperReducer,
  toggleMenu: toggleMenuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// 루트 상태와 디스패치 타입을 추출
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface SwiperState {
  selectedIndex: number;
}

const initialState: SwiperState = {
  selectedIndex: 0,
};

const swiperReducer = createSlice({
  name: 'swiper',
  initialState,
  reducers: {
    slideTo: (state, action: PayloadAction<number>) => {
      state.selectedIndex = action.payload;
    },
  },
});

export const { slideTo } = swiperReducer.actions;
export default swiperReducer.reducer;

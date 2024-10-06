import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ToggleMenuState {
  isOpen: boolean;
}

const initialState: ToggleMenuState = {
  isOpen: false,
};

const toggleMenuReducer = createSlice({
  name: 'toggleMenu',
  initialState,
  reducers: {
    toggleOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { toggleOpen } = toggleMenuReducer.actions;
export default toggleMenuReducer.reducer;

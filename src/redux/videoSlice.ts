import { createSlice } from '@reduxjs/toolkit';

export interface VideoState {
  isEnabled: boolean;
}

const initialState: VideoState = {
  isEnabled: false,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    start: (state) => {
      state.isEnabled = true;
    },
    stop: (state) => {
      state.isEnabled = false;
    },
  },
});

export const { start, stop } = videoSlice.actions;

export default videoSlice.reducer;

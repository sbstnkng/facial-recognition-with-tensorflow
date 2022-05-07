import { createSlice } from '@reduxjs/toolkit';

export interface SettingsState {
  isOpen: boolean;
  isSettings1Enabled: boolean;
}

const initialState: SettingsState = {
  isOpen: false,
  isSettings1Enabled: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openPanel: (state) => {
      state.isOpen = true;
    },
    closePanel: (state) => {
      state.isOpen = false;
    },
    toggleSettings1: (state) => {
      state.isSettings1Enabled = !state.isSettings1Enabled;
    },
  },
});

export const { openPanel, closePanel, toggleSettings1 } = settingsSlice.actions;

export default settingsSlice.reducer;

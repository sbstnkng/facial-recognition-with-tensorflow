import { configureStore } from '@reduxjs/toolkit';
import videoReducer from './videoSlice';
import settingsReducer from './settingsSlice';

export const store = configureStore({
  reducer: {
    video: videoReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

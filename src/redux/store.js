import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chatSlice';
import feedbackReducer from './feedbackSlice';

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    feedback: feedbackReducer,
  },
});

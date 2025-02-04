import { createSlice } from '@reduxjs/toolkit';

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: { ratings: {}, subjectiveFeedback: {} },
  reducers: {
    addFeedback: (state, action) => {
      state.ratings[action.payload.id] = action.payload.rating;
      state.subjectiveFeedback[action.payload.id] = action.payload.feedback;
    },
  },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;

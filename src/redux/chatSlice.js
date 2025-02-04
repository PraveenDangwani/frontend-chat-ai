import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    feedback: {
      rating: null,
      comments: '',
    },
    conversations: [],
    activeConversationIndex: null,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({ ...action.payload, feedback: null });
    },

    addFeedback: (state, action) => {
      state.feedback = { ...state.feedback, ...action.payload };
    },

    addRating: (state, action) => {
      state.feedback.rating = action.payload;
      if (state.activeConversationIndex !== null) {
        state.conversations[state.activeConversationIndex].feedback.rating = action.payload;
      }
    },

    addComments: (state, action) => {
      state.feedback.comments = action.payload;
    },

    toggleMessageFeedback: (state, action) => {
      const { messageIndex, feedbackType } = action.payload;

      // Immutably update the message
      state.messages = state.messages.map((msg, index) => {
        if (index === messageIndex) {
          return {
            ...msg,
            feedback: msg.feedback === feedbackType ? null : feedbackType,
          };
        }
        return msg;
      });

      // If updating an existing conversation
      if (state.activeConversationIndex !== null) {
        state.conversations[state.activeConversationIndex].messages = state.messages;
      }
    },

    saveConversation: (state) => {
      if (state.messages.length > 0) {
        const conversation = {
          messages: [...state.messages],
          feedback: { ...state.feedback },
        };

        if (state.activeConversationIndex !== null) {
          state.conversations.splice(state.activeConversationIndex, 1);
          state.conversations.unshift(conversation);
        } else {
          state.conversations.unshift(conversation);
        }

        state.messages = [];
        state.feedback = { rating: null, comments: '' };
        state.activeConversationIndex = null;
      }
    },

    loadConversation: (state, action) => {
      const { messages, feedback, index } = action.payload;
      state.messages = [...messages]; // Ensure a new array reference
      state.feedback = feedback || { rating: null, comments: '' };
      state.activeConversationIndex = index;
    },

    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const {
  addMessage,
  addFeedback,
  addRating,
  addComments,
  toggleMessageFeedback,
  saveConversation,
  loadConversation,
  clearMessages,
} = chatSlice.actions;

export default chatSlice.reducer;

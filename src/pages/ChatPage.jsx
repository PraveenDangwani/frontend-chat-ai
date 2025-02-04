import { useDispatch, useSelector } from 'react-redux';
import { addMessage, saveConversation, loadConversation, clearMessages } from '../redux/chatSlice';
import ChatInput from '../components/ChatInput';
import ChatMessage from '../components/ChatMessage';
import FeedbackComponent from '../components/FeedbackComponent';
import { getAIResponse } from '../utils/api';
import { useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';

const ChatPage = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const conversations = useSelector((state) => state.chat.conversations);
  const feedback = useSelector((state) => state.chat.feedback);
  const activeConversationIndex = useSelector((state) => state.chat.activeConversationIndex);

  const [conversationEnded, setConversationEnded] = useState(false);

  const handleSend = async (message) => {
    dispatch(addMessage({ text: message, sender: 'user' }));
    const response = await getAIResponse(message);
    dispatch(addMessage({ text: response.response, sender: 'ai' }));
  };

  const handleEndConversation = () => {
    if (messages.length > 0) {
      setConversationEnded(true);
    }
  };

  const handleSaveConversation = () => {
    dispatch(saveConversation());
    setConversationEnded(false);
  };

  const handleLoadConversation = (index) => {
    dispatch(loadConversation({ ...conversations[index], index }));
    setConversationEnded(false);
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      dispatch(saveConversation());
    }
    dispatch(clearMessages());
    setConversationEnded(false);
  };

  return (
    <div className="chat-layout">
      <div className="history-sidebar">
        <button className="new-chat-button" onClick={handleNewChat}>
          ➕ New Chat
        </button>

        <h3>Chat History</h3>
        <ul className="history-list">  {/* Make history scrollable */}
          {conversations.map((conv, index) => (
            <li key={index} className="history-item" onClick={() => handleLoadConversation(index)}>
              Conversation {index + 1} {conv.feedback?.rating ? `⭐${conv.feedback.rating}` : ''}
            </li>
          ))}
        </ul>

        <div className="theme-toggle-container"> 
          <ThemeToggle />
        </div>
      </div>

      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <ChatMessage key={index} message={msg} index={index} sender={msg.sender} />
          ))}
        </div>

        {activeConversationIndex !== null && feedback && (
          <div className="conversation-feedback">
            <h4>Previous Feedback:</h4>
            <p>⭐ Rating: {feedback.rating || 'No rating provided'}</p>
            <p>💬 Comments: {feedback.comments || 'No comments provided'}</p>
          </div>
        )}

        {!conversationEnded ? (
          <>
            <ChatInput onSend={handleSend} />
            <button className="end-conversation" onClick={handleEndConversation}>
              {activeConversationIndex !== null ? 'Update Conversation' : 'End Conversation'}
            </button>
          </>
        ) : (
          <>
            <FeedbackComponent />
            <button className="save-conversation" onClick={handleSaveConversation}>
              Save Conversation
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatPage;

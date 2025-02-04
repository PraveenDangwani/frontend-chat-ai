import { useDispatch } from 'react-redux';
import { toggleMessageFeedback } from '../redux/chatSlice';
import { useState } from 'react';

const ChatMessage = ({ message, index, sender }) => {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false); // Hover effect for AI responses

  const handleFeedback = (feedbackType) => {
    dispatch(toggleMessageFeedback({ messageIndex: index, feedbackType }));
  };

  return (
    <div
      onMouseEnter={() => sender === 'ai' && setHovered(true)}
      onMouseLeave={() => sender === 'ai' && setHovered(false)}
      className={`chat-message ${sender}`}
    >
      <p>{message.text}</p>

      {sender === 'ai' && (
        <div className="feedback-container">
          {/* Floating Feedback Buttons (Visible on Hover) */}
          {hovered && (
            <div className="feedback-buttons">
              <button
                onClick={() => handleFeedback('like')}
                className={message.feedback === 'like' ? 'selected' : ''}
              >
                👍
              </button>
              <button
                onClick={() => handleFeedback('dislike')}
                className={message.feedback === 'dislike' ? 'selected' : ''}
              >
                👎
              </button>
            </div>
          )}

          {/* Persistent Feedback Display */}
          {message.feedback && (
            <p className="feedback-display">
              Feedback: {message.feedback === 'like' ? '👍' : '👎'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;

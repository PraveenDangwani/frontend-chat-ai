import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const conversations = useSelector((state) => state.chat.messages);
  const navigate = useNavigate();

  return (
    <div className="history-sidebar">
      <h3>🕒 Chat History</h3>
      {conversations.length === 0 ? (
        <p>No previous chats</p>
      ) : (
        <ul>
          {conversations.map((_, index) => (
            <li key={index} className="history-item" onClick={() => navigate(`/conversation/${index}`)}>
              Conversation {index + 1}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryPage;

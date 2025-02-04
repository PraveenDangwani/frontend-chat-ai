import { useDispatch, useSelector } from 'react-redux';
import { addRating, addComments } from '../redux/chatSlice';

const FeedbackComponent = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.chat.feedback);

  const handleRating = (rating) => {
    dispatch(addRating(rating));
  };

  const handleComments = (e) => {
    dispatch(addComments(e.target.value));
  };

  return (
    <div className="feedback-container">
      <h4>Rate this conversation:</h4>
      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${feedback.rating >= star ? 'filled' : ''}`}
            onClick={() => handleRating(star)}
          >
            ⭐
          </span>
        ))}
      </div>

      <textarea
        placeholder="Leave your feedback here..."
        value={feedback.comments}
        onChange={handleComments}
        className="feedback-textarea"
      />
    </div>
  );
};

export default FeedbackComponent;

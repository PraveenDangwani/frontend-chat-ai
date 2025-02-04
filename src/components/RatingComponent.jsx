import { useDispatch, useSelector } from 'react-redux';
import { addRating } from '../redux/chatSlice';

const RatingComponent = () => {
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.chat.feedback);

  const handleRating = (rating) => {
    dispatch(addRating(rating)); // Save rating instantly
  };

  return (
    <div className="rating-container">
      <h4>Rate this conversation:</h4>
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
  );
};

export default RatingComponent;

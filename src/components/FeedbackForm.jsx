import { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');

  const handleSubmit = () => {
    onSubmit({ rating, comments });
  };

  return (
    <div>
      <h3>Rate the Conversation</h3>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        min="1"
        max="5"
      />
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        placeholder="Leave a comment..."
      ></textarea>
      <button onClick={handleSubmit}>Submit Feedback</button>
    </div>
  );
};

export default FeedbackForm;

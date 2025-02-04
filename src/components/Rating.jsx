import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div>
      <h3>Rate the Conversation:</h3>
      <div style={{ display: 'flex', gap: '5px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            size={30}
            color={star <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(rating)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Rating;

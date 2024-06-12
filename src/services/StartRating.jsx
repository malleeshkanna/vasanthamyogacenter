import React from 'react';

function StartRating({ value = 0, color = 'gold', size = 24 }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color, fontSize: size }}>
      {i < value ? '★' : '☆'}
    </span>
  ));

  return <div>{stars}</div>;
}

export default StartRating;
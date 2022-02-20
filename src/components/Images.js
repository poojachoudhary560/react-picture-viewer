import React from 'react';

const Images = ({ imageUrl }) => {
  if (imageUrl === null) {
    throw new Error('image empty');
  }
  return (
    <div className="picture">
      <img src={imageUrl} alt="picture data" />
    </div>
  );
};

export default Images;

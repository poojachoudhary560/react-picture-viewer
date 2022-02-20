import React, { useState, useEffect } from 'react';

const Picture = (props) => {
  const [imageData, setImageData] = useState('');
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=NpzCe_cek_q1E4L6ntCx2kgwyuVBER6Qu1_dCi-OGDE`;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, res.urls?.full);
        setImageData(res.urls?.thumb);
      });
  }, []);

  return (
    <>
      <div className="picture">
        <img src={imageData} alt="picture data" />
      </div>
    </>
  );
};

export default Picture;

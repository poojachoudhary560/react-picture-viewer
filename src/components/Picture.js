import React, { useState, useEffect } from 'react';

const Picture = (props) => {
  const [imageData, setImageData] = useState('');
  // 8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=NpzCe_cek_q1E4L6ntCx2kgwyuVBER6Qu1_dCi-OGDE`;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, res.status, res.urls?.full);
        setImageData(res.urls?.thumb);
      })
      .catch((err) => console.log('----', err));
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

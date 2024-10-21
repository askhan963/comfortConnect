import React from 'react';
import FImage from '../../assets/tamara-bellis.png'
function ImageComponent() {
  return (
    
      <img
        loading="lazy"
        src={FImage}
        alt="Woman holding a dog"
        className="object-cover w-full h-auto rounded-lg"
      />
   
  );
}

export default ImageComponent;

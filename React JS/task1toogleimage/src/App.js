import React, { useState } from 'react';

const ImageToggle = () => {
  const [isImage1Displayed, setIsImage1Displayed] = useState(true);

  const toggleImage = () => {
    setIsImage1Displayed(!isImage1Displayed);
  };

  return (
    <div className="image-toggle-container">
      {/* Display the image */}
      {isImage1Displayed ? (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNagZEGVKkBvNA2bvn38b5tlNxOSkuZXbRgQ&s" alt="Image 1" />
      ) : (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL1Kw6C-yFfaI9UvzlvhOvI91XOUd9ejXK4w&s" alt="Image 2" />
      )}

      {/* Toggle button */}
      <button onClick={toggleImage} className="toggle-button">
        Toggle Image
      </button>
    </div>
  );
};

export default ImageToggle;

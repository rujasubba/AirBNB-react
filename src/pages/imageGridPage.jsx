import React from 'react';
import { useLocation } from 'react-router-dom'; // To get passed state
import '../../styles/imageGridPage.css';

const ImageGridPage = () => {
  const location = useLocation();
  const { images, title } = location.state; // Access images and title from state

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="image-grid-page">
      <h1>{title}</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGridPage;

import React from 'react';
import '../../styles/imageGridModal.css'; // Add styles for the modal

const ImageGridModal = ({ images, title, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>✖</button>
        <h2>{title}</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGridModal;

import React, { useState } from 'react';
// import ImageGridModal from './imageGridModal';
import { useNavigate } from 'react-router-dom';
import '../../styles/imageCarousel.css';

const ImageCarousel = ({ images, title, host, status }) => {
    console.log(images);

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }


  const prevImage = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const nextImage = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  // const openModal =() => {
  //   setIsModalOpen(true);

  // };
  // const closeModal =() => {
  //   setIsModalOpen(false);

    const handelCardClick = () =>{
      navigate('/displayimages', {state:{images, title}});
    };

  return (
    <div className="main-container">
         <div className="card" onClick={handelCardClick}>
             <button className="prev-btn" onClick={prevImage}>⟨</button>
             <div className="image-wrapper">
                 <img
                     src={images[currentIndex]} // Only render the current image
                     alt={`Carousel ${currentIndex + 1}`}
                     className="active"
                  />
                
              </div>
           <button className="next-btn" onClick={nextImage}>⟩</button>
           <div className="card-details">
             <h3>{title}</h3>
             <p>Hosted by {host}</p>
             <span className="status">{status}</span>
            </div>                  
          </div>

          {/* {isModalOpen &&(
            <ImageGridModal images={images} title={title} onClose={closeModal} />
          )} */}
    </div>
  );
};

export default ImageCarousel;

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import ImageGridModal from './imageGridModal';
import ImageGridPage from '../../pages/imageGridPage';
import Gallery from './index';

import '../../styles/imageCarousel.css';

import IosShareIcon from '@mui/icons-material/IosShare';


const ImageCarousel = ({ images, title, host, status, place, guests, bedroom, bath, bed, star, reviews }) => {
    console.log(images);

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [imageDisplay, setImageDisplay] = useState(0);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }


  const prevImage = (e) => {
    
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    e.stopPropagation();
    
  };

  const nextImage = (e) => {
    
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    e.stopPropagation();


  };

  // const openModal =() => {
  //   setIsModalOpen(true);

  // };
  // const closeModal =() => {
  //   setIsModalOpen(false);

    const handelCardClick = (e) =>{
      
      navigate('/displayimages', {state:{images, title, host, status, place, guests, bedroom, bath, bed, star, reviews}});
      e.stopPropagation();
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
           <span id='card-share'><IosShareIcon /></span>
           <div className="card-details">
             <h3>{title}</h3>
             <p>Hosted by {host}</p>
             <span className="status">{status}</span>
            </div>                  
          </div>

         
    </div>
  );
};

export default ImageCarousel;

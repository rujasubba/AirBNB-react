import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';



import '../../styles/islandCarousel.css';

import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';


const IslandCarousel = ({ images, title, host, status, place, guests, bedroom, bath, bed, star, reviews, photo, profession, 
  area, date, price, bedphoto }) => {
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

  

    const handelCardClick = (e) =>{
      
      navigate('/island/${id}', {state:{images, title, host, status, place, guests, bedroom, bath, bed, star, reviews, photo, profession, area, date, price, bedphoto}});
      e.stopPropagation();
    };

  return (
   <React.Fragment>
       <div className="main-container">
         <div className="card" onClick={handelCardClick}>
             <button className="prev-btn" onClick={prevImage}>⟨</button>
             <div className="image-wrapper-island">
                 <img
                     src={images[currentIndex]} // Only render the current image
                     alt={`Carousel ${currentIndex + 1}`}
                     className="active"
                  />
                
              </div>
             <button className="next-btn" onClick={nextImage}>⟩</button>
             <div className='like-fav'>
                 <span id='fav'>Guest favourite</span>
                 <span id='card-like'><FavoriteBorderTwoToneIcon /></span>
             </div>
             
                           
          </div>

          
         
        </div>

     <div className="card-details">
        <h3>{place}</h3>
       <p>{area}</p>
       <p>{date}</p>
       <h3>AUD ${price} total</h3>

    </div>
  </React.Fragment>
       
  );
};

export default IslandCarousel;

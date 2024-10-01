import React, { useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom'; // To get passed state
import '../styles/pagesStyle/imageGridpage.css';
import { AppContext } from '../context';


import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';

const ImageGridPage = () => {
   
  const location = useLocation();
  // const navigate = useNavigate();
  const 
  { images = [],
    title = '',
    host = '',
    status = '',
    place = '',
    guests = '',
    bedroom = '',
    bath = '',
    bed = '',
    star = '',
    reviews = '', } = location.state || {};// Access images and title from state
   console.log(location.state);

   const [showAllImages, setShowAllImages] = useState(false);

  // const handleShowMoreClick = () => {
  //   navigate('/full-image-gallery', { state: { images, title } }); // Navigate to the full image gallery page
  // };

  if (!images || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <React.Fragment>
      <div className="image-grid-page">
         <div className='grid-heading'>
             <h1>{title}</h1>
             <div className='g-icons'>
                <span><IosShareIcon />  </span>
               <span>Share  </span>
               <span><FavoriteBorderIcon />  </span>
               <span>Save </span>

             </div>
             
          </div> 
      <div className="image-grid">
      
        {images.slice(0, showAllImages ? images.length:5).map((image, index) => (
          <div key={index} className="grid-item">
            <img src={image} alt={`Image ${index + 1}`} />
            {index === 4 && !showAllImages && (
              <button id="show-more" onClick={() => setShowAllImages(true)}>
                <span><AppsRoundedIcon/></span>Show all photos
             </button>
      )}
          </div>
        ))}
        
      </div>

      <div className='property-info'>
        <h2>{place}</h2>
        <span>{guests} guests</span> . <span>{bedroom} bedroom</span> . <span>{bed} bed</span> . <span>{bath} bath</span>
        <div className='ratings'>
          <span><StarIcon /></span><span>{star}</span> .  <span>{reviews}  reviews</span>
        </div>
      </div>
      <div className='lower-section'>
        <div className='page-info'>
           <div className='host-details'>
              <h3>Hosted by {host}</h3>
              <p>Bollywood actress</p>
           </div>

           <div className='property-details'></div>
        </div>

        <div className='availability'>
           <h3>{status} </h3>
           <button>Request</button>
        </div>
      </div>

      
    </div>



    </React.Fragment>
    
  );
};

export default ImageGridPage;

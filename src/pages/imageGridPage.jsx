import React, { useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom'; // To get passed state
import '../styles/pagesStyle/imageGridpage.css';


import {Images} from "../assets/index"
import { Icons } from '../assets/index';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import RestaurantRoundedIcon from '@mui/icons-material/RestaurantRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import { BedRounded } from '@mui/icons-material';


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
    reviews = '',
    profession = '',
    photo = '', born ='', work='', hobby='', pets='', school=''
   } = location.state || {};// Access images and title from state
   console.log(location.state);

   const [showAllImages, setShowAllImages] = useState(false);
  //  const [currentIndex, setCurrentIndex, nextImage, prevImage] = useContext(AppContext);

 

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
              <div className='photo-id'>
                 <img src={photo} alt="photoid" />
              </div>
              <div className='host-addons'>
                 <h3>Hosted by {host}</h3>
                 <p>{profession}</p>
              </div>
              
           </div>

           <div className='property-details'>
               <div className='upper-section'>
                      <div className='u-sections'> 
                          <KingBedOutlinedIcon />
                           <div className='shortinfo-right'>
                              <h3>Spend the night in the clock room</h3>
                              <p>Be the first person to sleep in a bedroom I designed around the famous clock.</p>
                          </div>
                       </div> 
                        <div className='u-sections'>
                             <RestaurantRoundedIcon />
                             <div className='shortinfo-right'>
                                <h3>Watch the Opening Ceremony from the rooftop terrace</h3>
                               <p>Kick off the Olympic Games Paris 2024 with dinner overlooking the Seine.</p>
                             </div>
                         </div>
                         <div className='u-sections'>
                             <LockOutlinedIcon />
                             <div className='shortinfo-right'>
                                <h3>Get private access to the Musée’s Impressionist collection</h3>
                               <p>An exclusive tour to a space not available to the public awaits you.</p>
                             </div>
                         </div>
                        <div className='u-sections'>
                            <FireplaceOutlinedIcon />
                           <div className='shortinfo-right'>
                              <h3>Have the Olympic torch all to yourselves</h3>
                             <p>This year’s torch that I designed will be privately displayed in your room.</p>
                           </div> 
                        </div>
            </div>
           </div>
        </div>

        <div className='availability'>
           <h3>{status} </h3>
           <button>Request</button>
          
        </div>

       
      </div>

      <div className='knowYourHost'>
          <h2>Meet your Host</h2>
          <div className='host-card'>
            <div className='host-left'>
              <div className='img-container'>
                 <img id='idphoto' src={photo} alt="idphoto" />
                 <span><img id='iconphoto'src={Images.VerifiedUser} alt="verifieduser" /></span>
               </div> 
              
              
              <div className='info'>
                 <h2>{host}</h2>
                 <p>Host</p>
              </div>
              
            </div>
            <div className='host-right'>
              <div className='hr-sections'>
                 <h3>{reviews}</h3>
                 <p>Reviews</p>
              </div>
              <div className='hr-sections'>
                 <h3>{star}<StarIcon /></h3>
                 <p>Rating</p>
              </div>
              <div className='hr-sections'>
                 <h3>Exp</h3>
                 <p>Months hosting</p>
              </div>
            </div>
          </div>

          <div className='u-sections'>
              <RestaurantRoundedIcon />
              <div className='shortinfo-host'>
                  <p>Born in {born}s</p>
              </div>
            </div>
            <div className='u-sections'>
                 <LockOutlinedIcon />
                 <div className='shortinfo-host'>
                     <p>Where I went to school:{school}</p>
                 </div>
            </div>
            <div className='u-sections'>
                    <FireplaceOutlinedIcon />
                  <div className='shortinfo-host'>
                      <p>My Work:{work}</p>
                  </div>
              </div>
              <div className='u-sections'>
                    <FireplaceOutlinedIcon />
                  <div className='shortinfo-host'>
                      <p>My Hobby:{hobby}</p>
                  </div> 
                </div>
                <div className='u-sections'>
                    <FireplaceOutlinedIcon />
                  <div className='shortinfo-host'>
                      <p>Pets:{pets}</p>
                  </div> 
                            
            </div>

        </div>

      
    </div>



    </React.Fragment>
    
  );
};

export default ImageGridPage;

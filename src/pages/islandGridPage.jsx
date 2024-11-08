import React, { useState, useEffect, useRef } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/index';
import { useLocation, useNavigate } from 'react-router-dom'; // To get passed state
import DateRangePicker from '../components/bookingIsland/calender';

import '../styles/pagesStyle/islandGridpage.css';


import {Icons, Images} from "../assets/index"
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';


const IslandGridPage = () => {
  const {
    checkIn,
    checkOut,
    setCheckIn,
    setCheckOut,
    adults,
    children,
    infants,
    pets,
    setAdults,
    setChildren,
    setInfants,
    setPets,
    totalPrice,
    total,
    setTotalPrice,
    numNights,
    nightlyRate,
    serviceFee,
    cleaningFee,
    offerAmount,
    currentIndex,
    setCurrentIndex,
    nextImage,
    prevImage,
  } = useContext(AppContext);



  const [guestDropdownOpen, setGuestDropdownOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setGuestDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const toggleGuestDropdown = () => setGuestDropdownOpen(!guestDropdownOpen);

  const updateGuests = (type, action) => {
    if (type === 'adults') {
      setAdults((prev) => action === 'increment' ? prev + 1 : prev - 1 >= 1 ? prev - 1 : 1);
    } else if (type === 'children') {
      setChildren((prev) => action === 'increment' ? prev + 1 : prev - 1 >= 0 ? prev - 1 : 0);
    } else if (type === 'infants') {
      setInfants((prev) => action === 'increment' ? prev + 1 : prev - 1 >= 0 ? prev - 1 : 0);
    } else if (type === 'pets') {
      setPets((prev) => action === 'increment' ? prev + 1 : prev - 1 >= 0 ? prev - 1 : 0);
    }
  };


  // // Function to calculate number of nights
  // const calculateNights = (checkIn, checkOut) => {
  //   if (!checkIn || !checkOut) return 0; // If dates are not selected
  //   const date1 = new Date(checkIn);
  //   const date2 = new Date(checkOut);
  //   const diffTime = date2 - date1;
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
  //   return diffDays > 0 ? diffDays : 0; // Ensure nights are positive
  // };


  
  const location = useLocation();
  const navigate = useNavigate();

  const handleReserve = () => {
    navigate('/request-to-book', {
      state: {
        checkIn,
        checkOut,
        totalPrice, 
        numNights,
        adults,
        children,
        infants,
        pets,
        nightlyRate,
        serviceFee,
        offerAmount,
        cleaningFee
      }
    });
  };

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
    area= '', date='', price='', bedphoto ='',
    photo = '' } 
    
    = location.state || {};// Access images and title from state
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

        <div className='left'>
        <div className='propinfo-right'> 
        <h2>{place}</h2>
        <span>{guests} guests</span> . <span>{bedroom} bedroom</span> . <span>{bed} bed</span> . <span>{bath} bath</span>
        
        <div className='ratings'>
          <span><StarIcon /></span><span>{star}</span> .  <span>{reviews}  reviews</span>
        </div>
      </div>
      <div className='lower-section'>
        <div className='page-info'>

        <div className='guest-favourite'>
          <div className='g-fav'>
          <span><img id='peace-flip' src={Icons.PeaceFlip} alt="leaf" /></span> <span id='peace-mid'>Guest Favourite</span> <span><img id='peace' src={Icons.Peace} alt="leaf" /></span>
          </div>
          <div className='g-favpara'>
          <p>One of the most loved homes on <br /> Airbnb, according to guests </p>
          
          </div>
          <div className='g-ratings'>
             <h3>{star}</h3>
             <p>starIcons</p>
          </div>
          <div className='g-reviews'>
             <h3>{reviews}</h3>
             <p>Reviews</p>
          </div>
           
           
        </div>
           <div className='host-details'>
              <div className='photo-id'>
                 <img src={photo} alt="photoid" />
              </div>
              <div className='host-addons'>
                 <h3>Hosted by {host}</h3>
                 <p>{profession}</p>
              </div>
              
           </div>

           <div className='property-details'></div>
        </div>

       
      </div>

      <div className='sleeping'>
        <h2>Where you'll sleep</h2>
        <div className='bed-photos'>
          <img src={bedphoto} alt="bedphoto" />
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

        </div>


        </div>
        <div className='right'>

        <div className="booking-card">
              <div className="price-section">
                <div className="original-price">{`$${(numNights * nightlyRate + serviceFee).toFixed(2)} AUD`}</div>
               <div className="discounted-price">{`$${(numNights * nightlyRate + serviceFee - offerAmount).toFixed(2)} AUD total`}</div>
             </div>
      
         <div className="booking-form">
           <div className="form-group">
             <label>CHECK-IN</label>
             <input 
            type="date" 
            value={checkIn} 
            onChange={(e) => setCheckIn(e.target.value)} 
           />
           </div>

           <div className="form-group">
             <label>CHECK-OUT</label>
             <input 
              type="date" 
              value={checkOut} 
              onChange={(e) => setCheckOut(e.target.value)} 
              />
            </div>

           <div className="form-group">
             <label>GUESTS</label>

             <div className="guest-dropdown" ref={dropdownRef}>
               <div>
                <button id='main-button' onClick={toggleGuestDropdown}>
                <p>4 guests</p>
                </button>
               </div>
               <div><span><Icons.KeyboardArrowDownIcon /></span></div>
              {/* {adults} adults, {children} children, {infants} infants, {pets} pets */}
               
                {guestDropdownOpen && (
                <div className="guest-dropdown-menu">
                <div className="guest-option">
                  <div className='g-span'><span>Adults</span> <p>Age 13+</p></div>
                  <div className='g-count'>
                  <button onClick={() => updateGuests('adults', 'decrement')}>-</button>
                  <span>{adults}</span>
                  <button onClick={() => updateGuests('adults', 'increment')}>+</button>
                  </div>
                </div>
                <div className="guest-option">
                  <div className='g-span'><span>Children</span> <p>Ages 2-12</p></div>
                  <div className='g-count'>
                  <button onClick={() => updateGuests('children', 'decrement')}>-</button>
                  <span>{children}</span>
                  <button onClick={() => updateGuests('children', 'increment')}>+</button>
                  </div>
                  
                </div>
                <div className="guest-option">
                  <div className='g-span'><span>Infants</span><p>Under 2</p></div>
                  <div className='g-count'>
                  <button onClick={() => updateGuests('infants', 'decrement')}>-</button>
                  <span>{infants}</span>
                  <button onClick={() => updateGuests('infants', 'increment')}>+</button>
                </div>
                  </div>
                  
                <div className="guest-option">
                  <div className='g-span'><span>Pets</span> <p>Bringing a service animal?</p></div>
                  <div className='g-count'>
                  <button onClick={() => updateGuests('pets', 'decrement')}>-</button>
                  <span>{pets}</span>
                  <button onClick={() => updateGuests('pets', 'increment')}>+</button>
                  </div>
                  
                </div>
                <p id='disclaimer'>This place has a maximum of 2 guests, not including infants. If you are Bringing
                more than 2 pets, please let your Host know.</p>
              </div>
            )}
          </div>
        </div>
      </div>
          

      <button className="reserve-btn" onClick={handleReserve}>Reserve</button>

      <p className="disclaimer">
        You won't be charged yet <br />
        Price shown is the total trip price, including additional fees and taxes.
      </p>

      <div className="price-breakdown">
        <div className="line-item">
          <span>{`$${nightlyRate.toFixed(2)} AUD x ${numNights} nights`}</span>
          <span>{`$${(numNights * nightlyRate).toFixed(2)} AUD`}</span>
        </div>
        <div className="line-item discount">
          <span>Long stay discount</span>
          <span>-${offerAmount}</span>
        </div>
        <div className="line-item">
          <span>Airbnb service fee</span>
          <span>${serviceFee}</span>
        </div>
        <div className="line-item">
          <span>Cleaning fee</span>
          <span>${cleaningFee}</span>
        </div>
        <div className="line-item total">
          <span>Total</span>
          <span>{`$${totalPrice.toFixed(2)} AUD`}</span>
        </div>
      </div>
    </div>

        </div>

      </div>
    </div>

    <DateRangePicker />

      
    



    </React.Fragment>
    
  );
};

export default IslandGridPage;

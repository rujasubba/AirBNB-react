import React, {useState, useContext, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from "../context";

import { Icons, Images } from '../assets';

import '../styles/pagesStyle/bookingRequest.css'
import { NavigateBeforeSharp } from '@mui/icons-material';

import FormSection from '../components/contactForm';

const BookingRequest = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/contact',
        {
          state: {
            checkIn,
            checkOut,
            totalPrice,
            total,
            numNights,
            adults,
            children,
            infants,
            pets,
            nightlyRate,
            offerAmount,
            serviceFee,
            cleaningFee
          }
      });
  };

  const [showForm, setShowForm] = useState(false);

  const { checkIn, checkOut, numNights, totalPrice, total, adults, children, infants, pets, nightlyRate, serviceFee,
    offerAmount,
    cleaningFee} = useContext(AppContext);

 
    const totalGuests = adults + children + infants;

  return (
    <div className="booking-page">
        <div className="request-to-book">
    <div className=" left-column">
     <div className='back-request'>
       <button className='go-back' onClick={() => navigate(-1)} ><Icons.NavigateBeforeSharpIcon/></button>
       <h2>Request to book</h2>
      </div> 
     

      <div className='booking-page-card'>

        <div className="price-alert">
          <span className="lower-price">Lower price.</span>
          <p>Your dates are $298 AUD less than the avg. nightly rate of the last 60 days.</p>
          <img src={Icons.Tag} alt="tag" />
        
        </div>

        <h3>Booking Details</h3>

      <div className="booking-summary">
        
        <p><strong>Check-in: </strong>{checkIn}</p>
        <p><strong>Check-out: </strong>{checkOut}</p>
        <p><strong>Guests: </strong>{adults} adults, {children} children, {infants} infants, {pets} pets</p>
        <p><strong>Total Price: </strong>${totalPrice.toFixed(2)} AUD</p>
      </div>

      <h3>Log in or sign up to book</h3>
        <div className="login-section">
          <select>
            <option>Afganstan (+93)</option>
            <option>Australia (+61)</option>
            <option>India (+91)</option>
            <option>Nepal (+977)</option>
            
          </select>
          <input type="text" placeholder="Phone number" />
          </div>
          <div className='login-p'>
          <p>We’ll call or text you to confirm your number. Standard message and data rates apply. <span>Privacy Policy</span> </p>
        </div>

      <button className="continue-btn" onClick={handleBooking}>Confirm Booking</button>
      

   
    <div className='line-container'>
      <hr className="line"/>
    <span className="or-text">or</span>
    <hr className="line"/>
    </div>

      <div className='login-options'>
        <div className='socialMedia'>
            <button><img src={Icons.Facebook} alt="facebook" /></button>
            <button><img src={Icons.Google} alt="google" /></button>
            <button><img src={Icons.Apple} alt="apple" /></button>
        </div>
        <div className='gmail-login'>
            <button><span id='mail-icon'><Icons.MailOutlineRoundedIcon /></span> <span>Continue with email</span></button>
        </div>
      </div>
    </div>
    </div>

    <div className="right-column">
     <div className='right-carddetails'>
      <div className='iland-img-container'>
         <img src={Images.IL1} alt="Island Resort" className="island-image" />
         <div className='iland-details'>
           <h3>Exclusive & Private Island Resort: Floral Island</h3>
           <div className="reviews">
             <span>⭐ 4.94 (179 reviews)</span>
             <span><img src={Icons.SuperUser} alt="superuser" /> </span> <span> Superhost</span>
           </div>
         </div>
      </div>
      
      <div className="price-details-card">

        <div className="price-summary">
          <div className="price-row">
            <span>${nightlyRate} x {numNights} nights</span>
            <span>{`$${(numNights * nightlyRate).toFixed(2)} AUD total`}</span>
          </div>
          <div className="price-row">
            <span>Discount</span>
            <span> -AUD {offerAmount}</span>
          </div>
          <div className="price-row">
            <span>Cleaning fee</span>
            <span> AUD {cleaningFee}</span>
          </div>
          <div class="price-row">
            <span>Airbnb service fee</span>
            <span>AUD {serviceFee}</span>
          </div>
          <div className="total">
            <strong>Total (AUD)</strong>
            <strong>{`$${(numNights * nightlyRate + serviceFee + cleaningFee - offerAmount).toFixed(2)} total`}</strong>
          </div>
        </div>
      </div>
    </div>  
    </div>



    </div>
   </div> 
  );
};

export default BookingRequest;

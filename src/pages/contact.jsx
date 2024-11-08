import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from 'react-router-dom';


import { AppContext } from '../context/index';

import FormSection from "../components/contactForm";
import IslandGridPage from "./islandGridPage";

import {Images, Icons } from "../assets";

import '../styles/pagesStyle/bookingRequest.css'

function Contact(){

    const location = useLocation();
    const navigate = useNavigate();

    const {
      checkIn,
      checkOut,
      totalPrice,
      total,
      numNights,
      adults,
      children,
      infants,
      pets,
      nightlyRate,  // Access this
      serviceFee,
      offerAmount,
      cleaningFee
    } = location.state || {};

   


    return(
    <div className="main-contact">
        <div className="request-to-pay">
             <div className=" left-column">
                <div className='back-request'>
                        <button className='go-back' onClick={() => navigate(-1)} ><Icons.NavigateBeforeSharpIcon/></button>
                     <h2>Confirm and Pay</h2>
                </div> 
     

         <div className='booking-page-card'>

         <div className="price-alert">
          <span className="lower-price">This is a rare find.</span>
          <p>Fran's place is usually booked.</p>
          <img src={Icons.Tag} alt="tag" />
        
         </div>

         <h2>Choose how to pay</h2>
         <div className="info-items">
             <div class="pay-options">
                  
                  <button>Pay {`$${(numNights * nightlyRate + serviceFee + cleaningFee - offerAmount).toFixed(2)} total`} AUD now</button>
                <button>Pay Part now, Pay part later</button>
              </div>
                         

          </div>

         {/* <div className="booking-summary">
        
        <p><strong>Check-in: </strong>{checkIn}</p>
        <p><strong>Check-out: </strong>{checkOut}</p>
        <p><strong>Guests: </strong>{adults} adults, {children} children, {infants} infants, {pets} pets</p>
        <p><strong>Total Price: </strong>${totalPrice.toFixed(2)} AUD</p>
         </div> */}

         <h3>Log in or sign up to book</h3>
        <div class="login-section">
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
    </div>


        <div className="form-section">
            <FormSection />

        </div>

      <div className="terms-condition">  
        <p>By selecting <span>Agree and continue</span>, I agree to Airbnb's  <a href="#">Terms of services, Payment Terms of Service</a> and <a href="#">Anti-discrimination Policy</a>. <a href="#">Privacy Policy</a> </p>
      </div>

      <button className="continue-btn"  onClick={() => navigate('/payment',
        {
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
            offerAmount,
            serviceFee,
            cleaningFee
          }
      }
      )}>Agree and continue</button>




        
    </div>  

    <div className="right-column">
     <div className='right-carddetails'>
      <div className='iland-img-container'>
         <img src={Images.IL1} alt="Island Resort" class="island-image" />
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
    )
}

export default Contact;
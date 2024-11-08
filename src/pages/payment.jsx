
import React, { useEffect, useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/index';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import '../styles/pagesStyle/payment.css';

import { Icons, Images } from '../assets';
import axios from '../axios';

const Payment = () => {


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


  const location = useLocation();
  const navigate = useNavigate();


  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);

  





  const handleChange= (event)=>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message :"");
    console.log(event);
  }

  const handleFormSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(({paymentIntent}) => {
      console.log("paymentIntent", paymentIntent);
      setSucceeded(true);
      setError(null);
      setProcessing(false);

    }). catch((e) =>{
      setSucceeded(false);
      setError(e);
      setProcessing(false);
    });
  };

  useEffect(() => {
    console.log("Total amount", total); // Check if `total` has a value
    console.log("Total price", totalPrice); // Check if `totalPrice` has a value
  }, [total, totalPrice]);

  useEffect(() => {
    const getClientSecret = async () => {
      // const amount = (total * 100);
      // try{
      const response = await axios.post(`/payments/create?total=${totalPrice *100}`);

      setClientSecret(response.data.clientSecret);
     };

     if(totalPrice> 0){
      getClientSecret();

     } 

  }, [totalPrice]);



  console.log("Total amount", totalPrice);

  console.log("client Secret", clientSecret);

  // Sample payment methods
  const [paymentMethods, setPaymentMethods] = useState([
    { id: 1, type: 'PayPal', email: 'example@gmail.com', isDefault: true },
    { id: 2, type: 'Visa', cardLast4: '1234', expiry: '12/24' },
  ]);

  const addPaymentMethod = () => {
    // Logic to add new payment method
    console.log('Add payment method clicked');
    
  };

  
  

  return (
    <div className="payment-container">
    <div className='payment-left'>
      <h1>Payments & Payouts</h1>
      <h1>{total}</h1>
      <h1>{totalPrice}</h1>
      
      <section className="your-payments">
        <h2>Your payments</h2>
        <p>Keep track of all your payments and refunds.</p>
        <button className="manage-btn">Manage payments</button>
      </section>

      <section className="payment-methods">
        <h3>Payment methods</h3>
        {/* {paymentMethods.map((method) => (
          <div key={method.id} className="payment-method">
            <div className="method-info">
              {method.type === 'PayPal' ? (
                <p>{method.type} - {method.email}</p>
              ) : (
                <p>{method.type} - **** {method.cardLast4} (Exp: {method.expiry})</p>
              )}
              {method.isDefault && <span className="default-label">DEFAULT</span>}
            </div>
            <button className="more-options">...</button>
          </div>
        ))} */}
        <form className="payment-form">
        <label>Full name(as displayed on card) </label>
            <input type="text" placeholder="John Deo"/>
          <CardElement  className="card-element" onChange={handleChange}/>
          <button type="submit" className="pay-button" onClick={handleFormSubmit} disabled={disabled}>
            Pay Now</button>
        </form>
        <button className="add-payment-btn" onClick={addPaymentMethod}>
          Add payment method
        </button>
      </section>
      </div>
      <div className='payment-right'>
      <section className="info-box">
        <div className="info-card">
          <img src={Icons.SaveMoney} alt="savemoney" />  
          <h3>Make all payments through Airbnb</h3>
          <p>
            Always pay and communicate through Airbnb to ensure you're protected
            under our <a href="#">Terms of Service,</a>
            <a href="#">Payment Terms of Service,</a> cancellation, and other safeguards.
            <a href="#learn-more">Learn more</a>
          </p>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Payment;
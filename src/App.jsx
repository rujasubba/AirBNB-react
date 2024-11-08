import React from 'react';
import { useState } from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ImageGridPage from './pages/imageGridPage';
import IslandGridPage from './pages/islandGridPage';
import Islands from './components/bookingIsland/index';
import BookingRequest from './pages/bookingRequest';
import FormSection from './components/contactForm';
import Layout from './layouts/Layout';
import Contact from './pages/contact';
import Payment from './pages/payment';


import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripeLoad = loadStripe("pk_test_51Pu8FnFz6ADdRgO2Z7RYd4clC5O1lMMevo0QkSvVbSyCzwavshmh9CsG9t10Q6Xihcife2ffy1VqLZYZSbqHu3fi00JyvXAhsS");



function App() {
  const [count, setCount] = useState(0)

  return (
      
   
             <Routes>
                <Route path ="/" element={<Home />} />
                 <Route path ="/displayimages" element={<ImageGridPage />} />

                 <Route path="/islandimages" element={<Islands />} />
                 <Route path="/island/:id" element={<IslandGridPage />} />
                 <Route path="/request-to-book" element={<BookingRequest />} />
                 <Route path="/booking-form" element={<FormSection />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route 
                   path="/payment" 
                   element={
                       <Elements stripe={stripeLoad}>
                           <Payment />
                     </Elements>
                   }
                />
              </Routes>
              
      
    
        
  )
}

export default App;

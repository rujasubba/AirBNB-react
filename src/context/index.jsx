
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext("");

const AppContextProvider = (props) => {
    const [showAllImages, setShowAllImages] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const formatDate = (date) => date.toISOString().split('T')[0];
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const [checkIn, setCheckIn] = useState(formatDate(today));
    const [checkOut, setCheckOut] = useState(formatDate(tomorrow));
    const [numNights, setNumNights] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const nightlyRate = 198.62;
    const serviceFee = 131.09;
    const offerAmount = 148.95;
    const cleaningFee = 100.00;
    const [totalPrice, setTotalPrice] = useState(nightlyRate);

    // Calculate the number of nights
    const calculateNights = (checkIn, checkOut) => {
        const date1 = new Date(checkIn);
        const date2 = new Date(checkOut);
        const diffTime = date2 - date1;
        return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    };

    // Update total price based on date changes
    useEffect(() => {
        const nights = calculateNights(checkIn, checkOut);
        setNumNights(nights);
        setTotalPrice(nights * nightlyRate + cleaningFee + serviceFee - offerAmount);
    }, [checkIn, checkOut, nightlyRate, serviceFee, cleaningFee, offerAmount]);

    const total = numNights * nightlyRate + serviceFee + cleaningFee - offerAmount;

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    // Define the context value
    const contextValue = {
        showAllImages,
        setShowAllImages,
        currentIndex,
        setCurrentIndex,
        checkIn,
        checkOut,
        numNights,
        adults,
        children,
        infants,
        pets,
        nightlyRate,
        serviceFee,
        offerAmount,
        cleaningFee,
        totalPrice,
        total,
        setCheckIn,
        setCheckOut,
        setAdults,
        setChildren,
        setInfants,
        setPets,
        setTotalPrice,
        nextImage,
        prevImage,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

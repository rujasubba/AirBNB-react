import React from 'react';
import {Images} from "../../assets/index";
import ImageCarousel from './imageCarousel';
import { Link } from 'react-router-dom';



import "../../styles/imageCarousel.css"


const Gallery = () => {
  const cards = [
    {
        images: [Images.Img1, Images.Img2, Images.Img3, Images.Img4, Images.Img5, Images.Img6, Images.Img7, Images.Img8, Images.Img9, Images.Img10 ],
        title: 'Live like Bollywood star',
        host: 'Janhvi Kapoor',
        status: 'Sold out',
        place: 'Chennai, India',
        star: '5.2',
        reviews: '2',
        guests: '2',
        bedroom: '1', 
        bath: '1', 
        bed:'1'

    },

    {
      images: [Images.Img11, Images.Img12, Images.Img13, Images.Img11, Images.Img12, Images.Img13],
      title: 'Game with Khaby Lame',
      host: 'Khaby Lame',
      status: 'Available',
      place: 'Milan, Italy',
      star: '5.0',
      reviews: '1',
      guests: '2',
      bedroom: '2', bath: '2', bed:'2'
    },

    {
      images: [Images.Img14, Images.Img15, Images.Img16],
      title: 'Live like Bollywood star',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
      place: 'Chennai, India',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1'
  },

  {
    images: [Images.Img17, Images.Img18, Images.Img19],
    title: 'Live like Bollywood star',
    host: 'Janhvi Kapoor',
    status: 'Sold out',
    place: 'Chennai, India',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1'
},


    {
      images: [Images.Img4, Images.Img5, Images.Img6],
      title: 'Live like Bollywood star',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
      place: 'Chennai, India',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1'
    },
    {
      images: [Images.Img7, Images.Img8, Images.Img9, Images.Img10],
      title: 'Open the Olympic Games',
      host: 'Mathieu Lehanneur',
      status: 'Sold out',
      place: 'Chennai, India',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1'
    },


    {
      images: [Images.Img1, Images.Img2, Images.Img3, Images.Img4, Images.Img5, Images.Img6],
      title: 'Live like Bollywood star',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
      place: 'Chennai, India',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1'
  },

  {
    images: [Images.Img11, Images.Img12, Images.Img13, Images.Img11, Images.Img12, Images.Img13],
    title: 'Live like Bollywood star',
    host: 'Janhvi Kapoor',
    status: 'Sold out',
    place: 'Chennai, India',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1'
  },

  {
    images: [Images.Img14, Images.Img15, Images.Img16],
    title: 'Live like Bollywood star',
    host: 'Janhvi Kapoor',
    status: 'Sold out',
    place: 'Chennai, India',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1'
},

{
  images: [Images.Img17, Images.Img18, Images.Img19],
  title: 'Live like Bollywood star',
  host: 'Janhvi Kapoor',
  status: 'Sold out',
  place: 'Chennai, India',
  star: '5.2',
  reviews: '2',
  guests: '2',
  bedroom: '1', bath: '1', bed:'1'
},


  {
    images: [Images.Img4, Images.Img5, Images.Img6],
    title: 'Live like Bollywood star',
    host: 'Janhvi Kapoor',
    status: 'Sold out',
    place: 'Chennai, India',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1'
  },
  {
    images: [Images.Img7, Images.Img8, Images.Img9, Images.Img10],
    title: 'Open the Olympic Games',
    host: 'Mathieu Lehanneur',
    status: 'Sold out',
    place: 'Chennai, India',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1'
  }
    // Add more cards as needed
  ];

  console.log(cards);

  return (
    <div className="card-carousel">

      {cards.map((card, index) => (

        <Link
           key={index}
           to={{
              pathname: '/displayimages',  // The path you want to navigate to
              state: { ...card }         // Pass the entire card data via state
            }}
            style={{ textDecoration: 'none', color: 'inherit' }} // Optional: To remove default link styles
         >
        <ImageCarousel
          key={index}
          images={card.images}
          title={card.title}
          host={card.host}
          status={card.status}
          place= {card.place}
          star= {card.star}
          reviews={card.reviews}
          guests={card.guests}
          bedroom= {card.bedroom}
          bath={card.bath}
          bed={card.bed}

        />
      </Link>  
      ))}
    </div>
  );
};

export default Gallery;

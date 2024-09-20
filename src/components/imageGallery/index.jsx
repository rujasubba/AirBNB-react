import React from 'react';
import {Images} from "../../assets/index";
import ImageCarousel from './imageCarousel';

import "../../styles/imageCarousel.css"


const Gallery = () => {
  const cards = [
    {
        images: [Images.Img1, Images.Img2, Images.Img3],
        title: 'Live like Bollywood star',
        host: 'Janhvi Kapoor',
        status: 'Sold out',
    },

    {
      images: [Images.Img11, Images.Img12, Images.Img13],
      title: 'Live like Bollywood star',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
    },

    {
      images: [Images.Img14, Images.Img15, Images.Img16],
      title: 'Live like Bollywood star',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
  },

  {
    images: [Images.Img17, Images.Img18, Images.Img19],
    title: 'Live like Bollywood star',
    host: 'Janhvi Kapoor',
    status: 'Sold out',
},


    {
      images: [Images.Img4, Images.Img5, Images.Img6],
      title: 'Live like Bollywood star',
      host: 'Janhvi Kapoor',
      status: 'Sold out',
    },
    {
      images: [Images.Img7, Images.Img8, Images.Img9, Images.Img10],
      title: 'Open the Olympic Games',
      host: 'Mathieu Lehanneur',
      status: 'Sold out',
    },
    // Add more cards as needed
  ];

  console.log(cards);

  return (
    <div className="card-carousel">
      {cards.map((card, index) => (
        <ImageCarousel
          key={index}
          images={card.images}
          title={card.title}
          host={card.host}
          status={card.status}
        />
      ))}
    </div>
  );
};

export default Gallery;

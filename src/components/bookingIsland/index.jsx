import React from 'react';
import {Images} from "../../assets/index";
import IslandCarousel from './islandCarousel';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



import "../../styles/islandCarousel.css"


const Islands = () => {

  const navigate = useNavigate();  // Initialize useNavigate

  const handleCardClick = (index, card) => {
    navigate(`/island/${index}`, { state: { ...card } });
  };



  const cards = [
    {
        images: [Images.IL1, Images.Img2, Images.Img3, Images.Img4, Images.Img5, Images.Img6, Images.Img7, Images.Img8, Images.Img9, Images.Img10, Images.Bed1 ],
        title: 'Live like Bollywood star',
        host: 'Janhvi Kapoor',
        profession: 'Bollywood Star', 
        status: 'Sold out',
        place: 'EI Nido, Philippines',
        star: '5.2',
        reviews: '2',
        guests: '2',
        bedroom: '1', 
        bath: '1', 
        bed:'1',
        photo: Images.HostJanhvi,
        area: '53 hectars',  date: '16-21Oct', bedphoto: Images.Bed1,


    },

    {
      images: [Images.IL2, Images.Img12, Images.Img13, Images.Img11, Images.Img12, Images.Img13, Images.Bed2],
      title: 'Game with Khaby Lame',
      host: 'Khaby Lame',
      profession: 'TikTok Creator',
      status: 'Available',
      place: 'Pulau Seribu, Jakarta, Indonesia',
      star: '5.0',
      reviews: '1',
      guests: '2',
      bedroom: '2', bath: '2', bed:'2',
      photo: Images.HostKhaby, 
      area: '53 hectars',  date: '16-21Oct',  bedphoto: Images.Bed2,
    },

    {
      images: [Images.IL3, Images.Img15, Images.Img16, Images.Img14, Images.Img15, Images.Img16, Images.Bed3],
      title: 'Crash at the X-Mansion',
      host: 'Joy',
      profession: 'Superhot',
      status: 'Sold out',
      place: 'Lovina, Indonesia',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1',
      photo: Images.HostJubliee,
      area: '53 hectars',
      date: '16-21Oct', bedphoto: Images.Bed3,
      price:'1234'
  },

  {
    images: [Images.IL4, Images.Img18, Images.Img19, Images.Bed4],
    title: 'Winnetka, Illinois, United States',
    host: 'Mathieu Lehanneur',
    profession: 'Big bro',
    status: 'Sold out',
    place: 'West Waigeo, Indonesia',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1',
    photo: Images.HostBuzz,
    area: '53 hectars',
    date: '16-21Oct', bedphoto: Images.Bed4,
    price:'1234'
},


    {
      images: [Images.IL5, Images.Img5, Images.Img6, Images.Bed5],
      title: 'Live like Bollywood star',
      host: 'Mathieu Lehanneur',
      profession: 'TikTok Creator',
      status: 'Sold out',
      place: 'Anambas, Indonesia',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1',
      photo: Images.HostFeid,
      area: '53 hectars',
      date: '16-21Oct', bedphoto: Images.Bed5,
      price:'1234'
    },
    {
      images: [Images.IL6, Images.Img8, Images.Img9, Images.Img10, Images.Bed6],
      title: 'Make core memories with Inside Out 2',
      host: 'Mathieu Lehanneur',
      profession: 'TikTok Creator',
      Prodession: 'Emotion',
      status: 'Sold out',
      place: 'Coles Bay, Australia',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1',
      photo: Images.HostJoy,
      area: '53 hectars',
      date: '16-21Oct', bedphoto: Images.Bed6,
      price:'1234'
    },


    {
      images: [Images.IL7, Images.Img2, Images.Img3, Images.Img4, Images.Img5, Images.Img6, Images.Bed7],
      title: 'Live like Bollywood star',
      host: 'Khaby Lame',
      profession: 'TikTok Creator',
      status: 'Sold out',
      place: 'Gizo, Solomon Islands',
      star: '5.2',
      reviews: '2',
      guests: '2',
      bedroom: '1', bath: '1', bed:'1',
      photo: Images.HostKhaby,
      area: '53 hectars',
      date: '16-21Oct', bedphoto: Images.Bed7,
      price:'1234'
  },

  {
    images: [Images.IL8, Images.Img12, Images.Img13, Images.Img11, Images.Img12, Images.Img13, Images.Bed8],
    title: 'Live like Bollywood star',
    host: 'Mathieu Lehanneur',
    profession: 'TikTok Creator',
    status: 'Sold out',
    place: 'General Luna, Philippines',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1',
    photo: Images.HostRogen,
    area: '53 hectars',
    date: '16-21Oct', bedphoto: Images.Bed8,
    price:'1234'
  },

  {
    images: [Images.IL9, Images.Img15, Images.Img16, Images.Bed1],
    title: 'Live like Bollywood star',
    host: 'Mathieu Lehanneur',
    profession: 'Bollywood Star',
    status: 'Sold out',
    place: 'Semporna, malaysia',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1',
    photo: Images.HostJanhvi,
    area: '53 hectars',
    date: '16-21Oct', bedphoto: Images.Bed1,
    price:'1234'
},

{
  images: [Images.IL10, Images.Img18, Images.Img19, Images.Bed2],
  title: 'Live like Bollywood star',
  profession: 'Bollywood Star',
  host: 'Mathieu Lehanneur',
  status: 'Sold out',
  place: 'Mccarrs Creek, Australlia',
  star: '5.2',
  reviews: '2',
  guests: '2',
  bedroom: '1', bath: '1', bed:'1',
  photo: Images.HostKhaby,
  area: '53 hectars',
  date: '16-21Oct', bedphoto: Images.Bed2,
  price:'1234'
},


  {
    images: [Images.IL11, Images.Img5, Images.Img6, Images.Bed3],
    title: 'Bend, Oregon, United States',
    host: 'Sandi',
    profession: 'Store Owner',
    status: 'Sold out',
    place: 'EI Nido, Philippines',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1',
    photo: Images.HostSandi,
    area: '53 hectars',
    date: '16-21Oct', bedphoto: Images.Bed3,
    price:'1234'
  },
  {
    images: [Images.IL12, Images.Img8, Images.Img9, Images.Img10, Images.Bed5],
    title: 'Open the Olympic Games',
    host: 'Buzz',
    profession: 'Store Owner',
    status: 'Sold out',
    place: 'Carmen, Philippines',
    star: '5.2',
    reviews: '2',
    guests: '2',
    bedroom: '1', bath: '1', bed:'1',
    photo: Images.HostBuzz,
    area: '53 hectars',
    date: '16-21Oct', bedphoto: Images.Bed5,
    price:'1234'
  }
    // Add more cards as needed
  ];

  console.log(cards);

  return (
    <div className="card-carousel">

      {cards.map((card, index) => (

          <div 
              key={index} 
              onClick={() => handleCardClick(index, card)}  // Call handleCardClick
              style={{ cursor: 'pointer' }}   // Add cursor pointer for visual feedback
>

        {/* <Link
           key={index}

           
           to={{
              pathname: '/islandimages',  
              state: { ...card }         
            }}
            style={{ textDecoration: 'none', color: 'inherit' }} // Optional: To remove default link styles
         > */}
        <IslandCarousel
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
          photo= {card.photo}
          profession= {card.profession}
          area= {card.area}
          date= {card.date}
          price= {card.price}
          bedphoto= {card.bedphoto}

        />
      {/* </Link>   */}
    </div>
      ))}
    </div>
  );
};

export default Islands;

import React from 'react';
import '../styles/layouts/footer.css'; // Make sure to link the CSS file for styling


import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">AirCover</a></li>
            <li><a href="#">Anti-discrimination</a></li>
            <li><a href="#">Disability Support</a></li>
            <li><a href="#">Cancellation options</a></li>
            <li><a href="#">Report neighbourhood concern</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li><a href="#">Airbnb your home</a></li>
            <li><a href="#">AirCover for Hosts</a></li>
            <li><a href="#">Hosting resources</a></li>
            <li><a href="#">Community Forum</a></li>
            <li><a href="#">Hosting responsibility</a></li>
            <li><a href="#">Join a free Hosting class</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Airbnb</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">New Features</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Airbnb.org emergency stays</a></li>
            <li><a href="#">Reconciliation Hub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className='bottom-info'>
             <p>&copy; 2024 Airbnb, Inc.</p>
             <p><a href="#">Privacy Policy</a> | <a href="#">Terms</a> | <a href="#">Sitemap</a></p>
        </div>
        <div className='bottom-icons'>
          <ul>
             <li><a href="#"><LanguageIcon /></a></li>
             <li><a href="">$ AUD</a></li>
             <li><a href="#"><FacebookIcon /></a></li>
             <li><a href="#"><TwitterIcon /></a></li>
             <li><a href="#"><InstagramIcon /></a></li>
            
           
         </ul>   
        </div>
          
     </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import facebookIcon from '../../assets/facebook-icon.png'; // Import your Facebook icon
import instagramIcon from '../../assets/instagram-icon.png'; // Import your Instagram icon
import tiktokIcon from '../../assets/tiktok-icon.png'; // Import your TikTok icon
import emailIcon from '../../assets/email-icon.png'; // Import your Email icon

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="footer-container">
            <hr />

            <div className="logo-with-text">
                <img src={logo} alt="" className='logo'/>
                <h1>Maryland Mayuri</h1>
            </div>

            <div className="social-media-icons">
                {/* Facebook */}
                <a href="https://www.facebook.com/UMDMayuri/" target="_blank" rel="noopener noreferrer">
                    <img src={facebookIcon} alt="Facebook" />
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/marylandmayuri/" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@marylandmayuri" target="_blank" rel="noopener noreferrer">
                    <img src={tiktokIcon} alt="TikTok" />
                </a>
                {/* Email */}
                <a href="mailto:umdmayuri@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={emailIcon} alt="Email" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer
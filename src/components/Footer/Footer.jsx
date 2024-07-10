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
            <div className="footer-separator-horizontal"></div>

            <div className="footer-content">
                <div className="logo-with-text">
                    <div className="text-logo-overlay">
                        <img src={logo} alt="" className='logo'/>

                        <h1>
                            <span className="maryland">Maryland</span>
                            <span className="mayuri">Mayuri</span>
                        </h1>
                    </div>
                </div>

            </div>
            <div className="social-media-column">
                <div className="social-media-icons">
                    <a href="https://www.facebook.com/UMDMayuri/" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/marylandmayuri/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.tiktok.com/@marylandmayuri" target="_blank" rel="noopener noreferrer">
                        <img src={tiktokIcon} alt="TikTok" />
                    </a>
                    <a href="mailto:umdmayuri@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={emailIcon} alt="Email" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
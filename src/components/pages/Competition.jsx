import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../index.css"
import "../../Competition.css"
import video from '../../assets/video.mp4'


import comp1 from '../../assets/carousel_images/comp-carousel1.png'
import comp2 from '../../assets/carousel_images/comp-carousel2.png'
import comp3 from '../../assets/carousel_images/comp-carousel3.png'
import comp4 from '../../assets/carousel_images/comp-carousel4.png'
import comp5 from '../../assets/carousel_images/comp-carousel5.png'
import comp6 from '../../assets/carousel_images/comp-carousel6.png'

import mixer1 from '../../assets/carousel_images/mixer-photos1.jpeg'
import mixer2 from '../../assets/carousel_images/mixer-photos2.jpeg'
import mixer3 from '../../assets/carousel_images/mixer-photos3.jpeg'

// Garba Slides
import garba_slide_1 from "../../assets/garba_slides_pics/garba_slide_1.JPG"
import garba_slide_2 from "../../assets/garba_slides_pics/garba_slide_2.JPG"
import garba_slide_3 from "../../assets/garba_slides_pics/garba_slide_3.JPG"
import garba_slide_4 from "../../assets/garba_slides_pics/garba_slide_4.JPG"
import garba_slide_5 from "../../assets/garba_slides_pics/garba_slide_5.JPG"
import garba_slide_6 from "../../assets/garba_slides_pics/garba_slide_6.JPG"

// Diwali Slides
import diwali_slide_1 from "../../assets/diwali_slides_pics/diwali_slide_1.JPG"
import diwali_slide_2 from "../../assets/diwali_slides_pics/diwali_slide_2.JPG"
import diwali_slide_3 from "../../assets/diwali_slides_pics/diwali_slide_3.JPG"
import diwali_slide_4 from "../../assets/diwali_slides_pics/diwali_slide_4.JPG"
import diwali_slide_5 from "../../assets/diwali_slides_pics/diwali_slide_5.JPG"

import ali from '../../assets/media-team-ali.jpeg'
import pranav from '../../assets/media-team-pranav.jpg'

import arrowIcon from '../../assets/arrow-icon-dark.png'

import nsu from '../../assets/team_photos/nsuTeamPic.png'
import bu from '../../assets/team_photos/buTeamPic.jpg'
import tamu from '../../assets/team_photos/tamuTeamPic.jpg'
import uw from '../../assets/team_photos/uwTeamPic.jpg'
import slu from '../../assets/team_photos/sluTeamPic.JPG'
import tufts from '../../assets/team_photos/nsuTeamPic.png'
import ut from '../../assets/team_photos/utTeamPic.jpg'
import ncsu from '../../assets/team_photos/ncsuTeamPic.JPG'



import tempLogo from '../../assets/logo.png'

import { TextEncrypted } from '../TextEncrypted';





const Competition = () => {

  const [activeTab, setActiveTab] = useState('event');
  const [activeTeam, setActiveTeam] = useState(null);
  const [activeEventTab, setActiveEventTab] = useState('diwali');

  const competitionPhotos = [
    { id: 1, src: comp1, alt: 'Comp 1' },
    { id: 2, src: comp2, alt: 'Comp 2' },
    { id: 3, src: comp3, alt: 'Comp 3' },
    { id: 4, src: comp4, alt: 'Comp 4' },
    { id: 5, src: comp5, alt: 'Comp 5' },
    { id: 6, src: comp6, alt: 'Comp 6' }
  ];

  const mixerPhotos = [
    { id: 1, src: mixer1, alt: 'Comp 1' },
    { id: 2, src: mixer2, alt: 'Comp 2' },
    { id: 3, src: mixer3, alt: 'Comp 3' },
    { id: 4, src: mixer2, alt: 'Comp 4' }
  ]

  const garbaPhotos = [
    { id: 1, src: garba_slide_1, alt: 'Garba 1' },
    { id: 2, src: garba_slide_2, alt: 'Garba 2' },
    { id: 3, src: garba_slide_3, alt: 'Garba 3' },
    { id: 4, src: garba_slide_4, alt: 'Garba 4' },
    { id: 5, src: garba_slide_5, alt: 'Garba 5' },
    { id: 6, src: garba_slide_6, alt: 'Garba 6' }
  ];

  const diwaliPhotos = [
    { id: 1, src: diwali_slide_1, alt: 'Diwali 1' },
    { id: 2, src: diwali_slide_2, alt: 'Diwali 2'},
    { id: 3, src: diwali_slide_3, alt: 'Diwali 3'},
    { id: 4, src: diwali_slide_4, alt: 'Diwali 4'},
    { id: 5, src: diwali_slide_5, alt: 'Diwali 5'},
  ]

  const teams = [
    { id: 1, src: tamu, alt: "TAMU Sahithya" },
    { id: 2, src: slu, alt: "SLU Omkara" },
    { id: 3, src: tufts, alt: "Tufts Pulse" },
    { id: 4, src: uw, alt: "Natya @ UW" },
    { id: 5, src: bu, alt: "BU Dheem" },
    { id: 6, src: ut, alt: "UT Nritya Sangam" },
    { id: 7, src: ncsu, alt: "NCSU Thandav" },
    { id: 8, src: nsu, alt: "NSU Veera" }
  ]

  const mediaTeam = [
    { name: 'Pranav Pajjuri', role: '(Videographer + Livestream)', src: pranav },
    { name: 'Ali Siddiqui', role: 'Photographer', src: ali }
  ];


  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  const sliderRef = React.useRef(null);

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };
  
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const handleTeamClick = (team) => {
    // Implement team click functionality
    console.log(`Clicked on ${team}`);
  };

  const handleWatchVideos = () => {
    // Implement watch videos functionality
    console.log('Watch videos clicked');
  };

  const mediaTeamSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  };



  return (
    <div className='competition-container'>
      <div id="competition" className="competition-section">
        <div className="competition-container">
          <header className='competition-header'>
            <TextEncrypted text="Maryland Mayuri 2026" interval={90} fontSize='clamp(2rem, 6vw, 4rem)' fontWeight='bold' />
            <p className='fade-in' style={{marginTop: '1rem'}}>Will they be able to complete the mission? Find out on</p>
            <h2 className='fade-in' style={{marginTop: '1rem'}}>February 21st, 2026</h2>
          </header>

          <div className="event-cards">
            <div className="event-card main-event fade-in">
              <h2>Competition</h2>
              <h3>John F. Kennedy High School</h3>
              <p>1901 Randolph Rd, Wheaton, MD 20902</p>
              <button className="ticket-button">
                <a className="ticket-link" href="https://doorlist.app/e/ub5am90?s=hTtEk7nZf6&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkBBfLKiCzKcC1eXn2NzP2Qfz4Z9Vqp9Elc80L-JZYhwnWHmW6C6qRkNI7cY_aem_KJlhdcK7D_AYWAHI82AjAg" rel="noopener noreferrer">Buy Tickets Here</a>
              </button>
            </div>
{/* 
            <div className="event-card afterparty">
              <h2>Afterparty</h2>
              <h3>Venue TBA</h3>
              <p>Address: To be announced</p>
              <p>Time: To be announced</p>
              <button className="ticket-button">
                <a className="ticket-link" href="https://www.eventbrite.com/e/mayuri-afterparty-2025-presented-by-nitesout-maryland-mayuri-tickets-1238651151939" target="_blank" rel="noopener noreferrer">Buy Afterparty Tickets</a>
              </button>
            </div> */}
          </div>
          <div className="divider fade-in"></div>
          <h1 className='transition-header fade-in-longer'>Past Events</h1>


          {/* Event Tabs */}
          <div className="full-width-breakout" style={{
            display: 'flex',
            backgroundColor: '#f6f7f2',
          }}>
            <button
              onClick={() => setActiveEventTab('diwali')}
              style={{
                width: '50%',
                padding: '15px 40px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: activeEventTab === 'diwali' ? '#4A0E1F' : '#ffffff',
                color: activeEventTab === 'diwali' ? '#ffffff' : '#4A0E1F',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeEventTab === 'diwali' ? '0 4px 8px rgba(74,14,31,0.3)' : 'none'
              }}
            >
              Diwali
            </button>
            <button
              onClick={() => setActiveEventTab('garba')}
              style={{
                width: '50%',
                padding: '15px 40px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                backgroundColor: activeEventTab === 'garba' ? '#001f3f' : '#ffffff',
                color: activeEventTab === 'garba' ? '#ffffff' : '#001f3f',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeEventTab === 'garba' ? '0 4px 8px rgba(0,31,63,0.3)' : 'none'
              }}
            >
              Garba
            </button>
          </div>

          {/* Garba Event Section */}
          {activeEventTab === 'garba' && (
        <div className="garba-event-section full-width-breakout" style={{
          backgroundColor: '#001f3f',
          padding: '100px 20px',
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <h1 style={{
          fontFamily: '"Courier New", Courier, monospace',
          fontSize: '4rem',
          color: '#ffffff',
          fontWeight: 'normal',
          textAlign: 'center',
          marginBottom: '40px',
          letterSpacing: '0.05em'
        }}>
          OVER <span style={{ fontWeight: 'bold' }}>500</span> TICKETS SOLD AT GARBA!
        </h1>

        {/* Two content bubbles */}
        <div style={{ display: 'flex', gap: '40px', maxWidth: '1200px', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Garba Thank You Bubble */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#f2e4e8',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(102, 15, 48, 0.2)',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#210101' }}>
                A Night to Remember!
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#210101' }}>
                Thank you to everyone who came out to Garba! With over 500 tickets sold, 
                it was an incredible celebration of culture, music, and community. We couldn't have 
                done it without your amazing energy and support!
              </p>
            </div>
          </div>

          {/* Liaison Promotion Bubble */}
          <div style={{
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#e5e4f2',
            borderRadius: '15px',
            boxShadow: '0 10px 20px rgba(48, 15, 102, 0.2)',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#010221' }}>
                So What's Next?
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#010221' }}>
                Next up is our competition in the spring! If you loved the energy at Garba, you'll definitely love the energy at Mayuri, happening on
                February 21st at Montgomery Blair High School. Follow our Instagram and Tiktok to be the first to grab tickets when they drop!
              </p>
            </div>
          </div>
        </div>

        {/* Garba Photos Carousel */}
        <div style={{ 
          width: '100%', 
          maxWidth: '900px', 
          marginTop: '60px',
          padding: '0 20px'
        }}>
          <Slider {...carouselSettings}>
            {garbaPhotos.map((photo) => (
              <div key={photo.id}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '600px',
                    objectFit: 'contain',
                    borderRadius: '15px',
                    display: 'block'
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Photo Link Text */}
        <div style={{
          marginTop: '30px',
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#ffffff'
        }}>
          Check out your photos <a target="_blank" href="https://photos.google.com/share/AF1QipOxFzH4aWTXFUk1mNei_uCj9gy-Zvc2gMUemLkX5YfMTEtrssfcOPuMIzeUwcXESg?key=Y25wR0wwQ3VGMjNfZlI0aXZyRUR4NWNac1RxS0ZR" style={{ color: '#ffd700', textDecoration: 'underline' }}>here!</a>
        </div>
        </div>
      )}

      {/* Diwali Event Section */}
      {activeEventTab === 'diwali' && (
        <div className="diwali-event-section full-width-breakout" style={{
          backgroundColor: '#4A0E1F',
          padding: '100px 20px',
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{
            fontFamily: '"Playfair Display", "Georgia", serif',
            fontSize: '4.5rem',
            color: '#ffffff',
            fontWeight: '700',
            fontStyle: 'italic',
            textAlign: 'center',
            marginBottom: '40px',
            letterSpacing: '0.03em',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            A <span style={{ fontWeight: '900', textDecoration: 'underline', textDecorationColor: '#ffd700' }}>LIT</span> Night at Diwali!
          </h1>

          {/* Two content bubbles */}
          <div style={{ display: 'flex', gap: '40px', maxWidth: '1200px', width: '100%', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* Diwali Thank You Bubble */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              backgroundColor: '#f2e4e8',
              borderRadius: '15px',
              boxShadow: '0 10px 20px rgba(102, 15, 48, 0.2)',
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#210101' }}>
                  Thank You!
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#210101' }}>
                  Thank you to everyone who came out to our Diwali celebration! It was an amazing 
                  festival of lights, music, and joy. You guys brought great energy and truly made our event feel special.
                </p>
              </div>
            </div>

            {/* Liaison Promotion Bubble */}
            <div style={{
              flex: '1',
              minWidth: '300px',
              backgroundColor: '#e5e4f2',
              borderRadius: '15px',
              boxShadow: '0 10px 20px rgba(48, 15, 102, 0.2)',
              padding: '40px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#010221' }}>
                  If You Enjoyed Diwali...
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#010221' }}>
                  Then you'll definitely love Mayuri. Come watch as the most talented teams across the country compete in
                  our classical Indian dance competition! This will be held on February 21st at Montgomery Blair High School.
                  Follow our Instagram and Tiktok to be the first to grab tickets when they drop!
                </p>
              </div>
            </div>
          </div>

          {/* Diwali Photos Carousel */}
          <div style={{ 
            width: '100%', 
            maxWidth: '900px', 
            marginTop: '60px',
            padding: '0 20px'
          }}>
            <Slider {...carouselSettings}>
              {diwaliPhotos.map((photo) => (
                <div key={photo.id}>
                  <img 
                    src={photo.src} 
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '600px',
                      objectFit: 'contain',
                      borderRadius: '15px',
                      display: 'block'
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Photo Link Text for Diwali */}
          <div style={{
            marginTop: '40px',
            textAlign: 'center',
            fontSize: '1.2rem',
            color: '#ffffff'
          }}>
            Check out your diwali photos <a target="_blank" href="https://photos.google.com/share/AF1QipP_Y1z-NPmaLRvFdnX2jz89AaZA_X29S6lkCMRRuT61YZpICyx4hGAtI2L6RB6iDA?key=THdXSWNtNURQZTFwZ1J2aURwU1dFTzQ5eVozSW9B" style={{ color: '#ffd700', textDecoration: 'underline' }}>here!</a>
          </div>
        </div>
      )}
        </div>
      </div>

      {/* <div className="competing-teams-section">
        <h2>Competing Teams</hZ2>
        <div className="team-panels">
          {teams.map((team, index) => (
            <div
              key={index}
              className={`team-panel ${activeTeam === index ? 'active' : ''}`}
              onClick={() => setActiveTeam(activeTeam === index ? null : index)}
            >
              <div className="team-panel-header">
                <h3>{team.alt}</h3>
              </div>
              <div className="team-panel-content">
                <img src={team.src} alt={team.alt} />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="media-team-section">
        <h2>Our Media Team</h2>
        <div className="media-carousel-container">
          <Slider ref={sliderRef} {...mediaTeamSettings}>
            {mediaTeam.map((member, index) => (
              <div key={index} className="media-team-member">
                <div className="image-container">
                  <img src={member.src} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </Slider>
          <button className="custom-prev-arrow" onClick={goToPrev}>
            <img src={arrowIcon} alt="Previous" />
          </button>
          <button className="custom-next-arrow" onClick={goToNext}>
            <img src={arrowIcon} alt="Next" />
          </button>
        </div>
      </div>

      <div id="media" className="media-section">
        <div className="carousel-wrapper">

          <div className="carousel-container mixer-carousel">
            <div className="carousel-heading-container">
              <a href="https://sashuphoto.com/events" target="_blank" className="carousel-heading">Mixer Photos</a>
            </div>
            <Slider {...sliderSettings}>
              {mixerPhotos.map((photo) => (
                <div key={photo.id} className='carousel-slide'>
                  <img src={photo.src} alt={photo.alt} />
                </div>
              ))}
            </Slider>
          </div>

          <div className="carousel-container competition-carousel">
            <div className="carousel-heading-container">
              <a href="https://drive.google.com/drive/folders/1M5tD-A0LUey06_Q6JuUhLz3iVw_XgNv3?usp=sharing" target="_blank" className="carousel-heading">Competition Photos</a>
            </div>
            <Slider {...sliderSettings}>
              {competitionPhotos.map((photo) => (
                <div key={photo.id} className='carousel-slide'>
                  <img src={photo.src} alt={photo.alt} />
                </div>
              ))}
            </Slider>
          </div>
        </div>


        <div className="front-back-row-videos">
          <video
            autoPlay
            loop
            muted
            className="background-video"
            controls={false}
            playsInline
            onError={(e) => console.error("Video error:", e)}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <a href="https://www.youtube.com/watch?v=1FwCVkTQkOI&list=PLPMaxQdMb8L-ofmRE6PxkXQgcO1ANELtu" target="_blank" className="carousel-heading">Front and Backrow</a>
          </div>
        </div>
      </div> */}  
    </div>
  );
}

export default Competition
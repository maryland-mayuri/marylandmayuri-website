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


import ali from '../../assets/media-team-ali.jpeg'
import pranav from '../../assets/media-team-pranav.jpg'

import arrowIcon from '../../assets/arrow-icon-dark.png'
import tuxClipart from '../../assets/real-tux-clipart.png'

import uscd from '../../assets/team_photos/ucsdpushpanjali.jpg'
import pitt from '../../assets/team_photos/pittnrityamala.jpg'
import rpi from '../../assets/team_photos/rpirudras.jpg'
import berkeley from '../../assets/team_photos/natyaberkeley.jpg'
import rice from '../../assets/team_photos/ricerasikas.jpg'
import tufts from '../../assets/team_photos/tuftspulse.jpg'
import ut from '../../assets/team_photos/utnrityasangam.jpeg'
import uga from '../../assets/team_photos/ugaamara.jpeg'


import tempLogo from '../../assets/logo.png'





const Competition = () => {

  const [activeTab, setActiveTab] = useState('event');
  const [activeTeam, setActiveTeam] = useState(null);

  // Password protection state
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const correctPassword = "iruyam2026"; // Change this to your desired password

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

  const teams = [
    { id: 1, src: berkeley, alt: "Natya @ Berkeley" },
    { id: 2, src: uga, alt: "UGA Amara" },
    { id: 3, src: tufts, alt: "Tufts Pulse" },
    { id: 4, src: uscd, alt: "USCD Pushpanjali" },
    { id: 5, src: rice, alt: "Rice Rasikas" },
    { id: 6, src: ut, alt: "UT Nritya Sangam" },
    { id: 7, src: pitt, alt: "Pitt Nrityamala" },
    { id: 8, src: rpi, alt: "RPI Rudras" }
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

  // Typewriter effect for TOP SECRET
  const topSecretText = "TOP SECRET";
  const [typedText, setTypedText] = useState("");
  const [showTux, setShowTux] = useState(false);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(topSecretText.slice(0, i + 1));
      i++;
      if (i === topSecretText.length) {
        clearInterval(interval);
        setTimeout(() => setShowTux(true), 300); // Show tux after a short delay
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Animation for input, button, and info text
  const [showLockUI, setShowLockUI] = useState(false);
  useEffect(() => {
    if (showTux) {
      const timer = setTimeout(() => setShowLockUI(true), 500);
      return () => clearTimeout(timer);
    }
  }, [showTux]);

  if (!isUnlocked) {
    return (
      <div className="password-lock-screen" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start', // Move content up
        minHeight: '100vh',
        background: '#000',
        paddingTop: '10rem', // Add some top padding
      }}>
        <h1 style={{
          fontFamily: 'Cinzel, serif',
          fontWeight: 900,
          fontSize: '3rem',
          letterSpacing: '0.25em',
          color: 'gold',
          textShadow: '2px 2px 8px #222, 0 0 10px #bfa76f',
          marginBottom: '1.5rem',
          textAlign: 'center',
          textTransform: 'uppercase',
          minHeight: '3.5rem',
        }}>{typedText}<span style={{color: 'gold', fontWeight: 1000}}>{typedText.length < topSecretText.length ? '|' : ''}</span></h1>
        <div style={{
          opacity: showTux ? 1 : 0,
          transform: showTux ? 'translateY(0)' : 'translateY(80px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease',
          display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '1rem',
        }}>
          <img src={tuxClipart} alt="Tuxedo" style={{maxWidth: '150px', margin: '0 auto', display: 'block'}} />
        </div>
        <div style={{
          opacity: showLockUI ? 1 : 0,
          transform: showLockUI ? 'translateY(0)' : 'translateY(80px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease',
          display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%',
        }}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '320px', marginLeft: '32px'}}>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1.1rem',
                border: '2px solid #fff',
                marginBottom: '0.5rem',
                background: '#000',
                color: '#fff',
                outline: 'none',
                borderRadius: '0',
                marginRight: '0.5rem',
                textIndent: '0rem',
              }}
            />
            <button
              style={{
                padding: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
              onClick={() => {
                if (password === correctPassword) {
                  setIsUnlocked(true);
                  setError("");
                } else {
                  setError("Incorrect password. Please try again.");
                }
              }}
              aria-label="Unlock"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L20 16L12 24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div style={{color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '1rem', textAlign: 'center', maxWidth: '100%', marginBottom: '0.5rem', marginTop: '0.5rem'}}>
            Get access to exclusive content when you <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNVcHH7_mt0wBPsFWyEht6PUsphzsUyqsLyXYIha3BSzw4qA/viewform" style={{color: '#fff'}} target='_blank'> join our e board...</a>
          </div>
        </div>
        {error && <div style={{color: 'red', marginTop: '1rem'}}>{error}</div>}
      </div>
    );
  }

  return (
    <div className='competition-container'>
      <div id="competition" className="competition-section">
        <div className="competition-container">
          <header className='competition-header'>
            <h1>Maryland Mayuri 2025</h1>
            <p>February 22nd, 2025 | College Park, MD</p>
          </header>

          <div className="event-cards">
            <div className="event-card main-event">
              <h2>Competition</h2>
              <h3>Wheaton High School</h3>
              <p>12401 Dalewood Dr, Silver Spring, MD 20906</p>
              <p>Doors Open: 4:30 PM</p>
              <button className="ticket-button">
                <a className="ticket-link" href="https://www.ticketleap.events/tickets/maryland-mayuri/maryland-mayuri-2025" target="_blank" rel="noopener noreferrer">Buy Event Tickets</a>
              </button>
            </div>

            <div className="event-card afterparty">
              <h2>Afterparty</h2>
              <h3>Venue TBA</h3>
              <p>Address: To be announced</p>
              <p>Time: To be announced</p>
              <button className="ticket-button">
                <a className="ticket-link" href="https://www.eventbrite.com/e/mayuri-afterparty-2025-presented-by-nitesout-maryland-mayuri-tickets-1238651151939" target="_blank" rel="noopener noreferrer">Buy Afterparty Tickets</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="competing-teams-section">
        <h2>Competing Teams</h2>
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
      </div>

      <div className="media-team-section">
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
      </div>
    </div>
  );
}

export default Competition
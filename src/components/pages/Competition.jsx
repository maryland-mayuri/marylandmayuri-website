import React, { useState } from 'react'
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


import siva from '../../assets/media-team-siva.jpg'
import surender from '../../assets/media-team-surender.jpg'
import sashu from '../../assets/media-team-sashu.jpg'
import amrit from '../../assets/media-team-amrit.jpg'

import arrowIcon from '../../assets/arrow-icon-dark.png'

import uscd from '../../assets/logo.png'
import pitt from '../../assets/pittnrityamala.jpg'
import rpi from '../../assets/logo.png'
import berkeley from '../../assets/natyaberkeley.jpg'
import rice from '../../assets/ricerasikas.jpg'
import tufts from '../../assets/tuftspulse.jpg'
import ut from '../../assets/logo.png'
import uga from '../../assets/ugaamara.jpg'





const Competition = () => {

  const [activeTab, setActiveTab] = useState('event');
  const [activeTeam, setActiveTeam] = useState(null);


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
    { name: 'Sashu Prakash', role: 'Technical Director', src: sashu },
    { name: 'Amrit Magesh', role: 'Videographer', src: amrit },
    { name: 'Siva Sottalu', role: 'Photographer', src: siva },
    { name: 'Sasi Bennuru', role: 'Photographer', src: surender }
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
                <a className="ticket-link" href="https://your-ticket-link.com" target="_blank" rel="noopener noreferrer">Buy Event Tickets</a>
              </button>
            </div>

            <div className="event-card afterparty">
              <h2>Afterparty</h2>
              <h3>Venue TBA</h3>
              <p>Address: To be announced</p>
              <p>Time: To be announced</p>
              <button className="ticket-button">
                <a className="ticket-link" href="https://your-afterparty-ticket-link.com" target="_blank" rel="noopener noreferrer">Buy Afterparty Tickets</a>
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
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../index.css";
import "../../Competition.css";

// KEEP all your imports (images, video, etc.)
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

const Mayuri2025 = () => {
  const [activeTeam, setActiveTeam] = useState(null);

  return (
    <div className="competition-container">
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
};

export default Mayuri2025;
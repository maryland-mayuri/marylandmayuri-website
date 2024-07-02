import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../../index.css"
import "../../Competition.css"
import aakashPatel from '../../assets/board_member_pictures/aakash_p.jpg'
import video from '../../assets/test-video.mov'

const Competition = () => {

    const mixerPhotos = [
        { id: 1, src: aakashPatel, alt: 'Mixer 1' },
        { id: 2, src: aakashPatel, alt: 'Mixer 2' }
      ];
    
      const competitionPhotos = [
        { id: 1, src: aakashPatel, alt: 'Competition 1' },
        { id: 2, src: aakashPatel, alt: 'Competition 2' }
      ];

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

      const teams = [
        'Team 1', 'Team 2', 'Team 3', 'Team 4',
        'Team 5', 'Team 6', 'Team 7', 'Team 8'
      ];

      const handleTeamClick = (team) => {
        // Implement team click functionality
        console.log(`Clicked on ${team}`);
    };

    const handleWatchVideos = () => {
        // Implement watch videos functionality
        console.log('Watch videos clicked');
    };

  return (
    <div className='competition-container'>
      {/* Competition section code here */}

      <div id="media" className="media-section">
        <div className="carousel-wrapper">
            <div className="mixer-carousel">
                <h2>Mixer Photos</h2>
                <div className="carousel-container">
                    <Slider {...sliderSettings}>
                        {mixerPhotos.map((photo) => (
                            <div key={photo.id}><img src={photo.src} alt={photo.alt} /></div>
                        ))}
                    </Slider>

                    <div className="carousel-overlay">
                        <a href="https://your-mixer-link.com" target="_blank" rel="noopener noreferrer">View All Mixer Photos</a>
                    </div>
                </div>
            </div>

            <div className="competition-carousel">
                <h2>Competition Photos</h2>
                <div className="carousel-container">
                    <Slider {...sliderSettings}>
                        {competitionPhotos.map((photo) => (
                            <div key={photo.id}><img src={photo.src} alt={photo.alt} /></div>
                        ))}
                    </Slider>

                    <div className="carousel-overlay">
                        <a href="https://your-competition-link.com" target="_blank" rel="noopener noreferrer">View All Competition Photos</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="team-photos">
          <h2>Team Photos</h2>
          <div className="team-buttons">
            {teams.map((team, index) => (
              <button key={index} onClick={() => handleTeamClick(team)}>
                {team}
              </button>
            ))}
          </div>
        </div>

        <div className="front-back-row-videos">
          <video autoPlay loop muted className="background-video">
            <source src="../../assets/test-video.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <h2>Competition Videos</h2>
            <p>Watch our exciting competition performances!</p>
            <button onClick={() => handleWatchVideos()}>Watch Videos</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competition
import React from 'react'
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


const Competition = () => {

    const mixerPhotos = [
      {id: 1, src: comp1, alt: 'Comp 1' },
      {id: 2, src: comp2, alt: 'Comp 2' },
      {id: 3, src: comp3, alt: 'Comp 3' },
      {id: 4, src: comp4, alt: 'Comp 4' },
      {id: 5, src: comp5, alt: 'Comp 5' },
      {id: 6, src: comp6, alt: 'Comp 6' }
      ];

    const competitionPhotos = [
      {id: 1, src: comp1, alt: 'Comp 1' },
      {id: 2, src: comp2, alt: 'Comp 2' },
      {id: 3, src: comp3, alt: 'Comp 3' },
      {id: 4, src: comp4, alt: 'Comp 4' },
      {id: 5, src: comp5, alt: 'Comp 5' },
      {id: 6, src: comp6, alt: 'Comp 6' }
    ]
    
    

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1500,
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
      <div id="competition" className="competition-section">

      </div>

      <div id="media" className="media-section">
        <div className="carousel-wrapper">
            <div className="carousel-container mixer-carousel">
                <h2>Mixer Photos</h2>
                    <Slider {...sliderSettings}>
                        {mixerPhotos.map((photo) => (
                            <div key={photo.id}><img src={photo.src} alt={photo.alt} /></div>
                        ))}
                    </Slider>

                    <div className="carousel-overlay">
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer">View All Mixer Photos</a>
                    </div>
            </div>

            <div className="carousel-container competition-carousel">
                <h2>Competition Photos</h2>
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


        <div className="front-back-row-videos">
          <video
            autoPlay
            loop 
            muted 
            className="background-video"
            onError={(e) => console.error("Video error:", e)}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-content">
            <h2>Front / Back Row Videos</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competition
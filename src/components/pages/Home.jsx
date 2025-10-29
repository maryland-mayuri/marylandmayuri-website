import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../index.css'
import '../../Home.css'
import home_page_image from '../../assets/home-page-image.jpg'
import Confetti from '../Confetti'

// Directors
import pratiksha_d from '../../assets/board_member_pictures/pratiksha_d.jpg'
import nihira_m from '../../assets/board_member_pictures/nihira_m.jpg'
import aditya_p from '../../assets/board_member_pictures/aditya_p.jpg'



// Event Ops
import suhan_n from '../../assets/board_member_pictures/suhan_n.jpg'
import rushina_p from '../../assets/board_member_pictures/rushina_p.jpg'



// Registration
import giridhar_s from '../../assets/board_member_pictures/giri_s.jpg'
import pranav_p from '../../assets/board_member_pictures/Pranav Palle Headshot.png'
import bhavri_p from '../../assets/board_member_pictures/BharviPatel_Headshot.jpg'


// Hospitality
import apurva_h from '../../assets/board_member_pictures/person_placeholder.jpg'
import azraa_a  from '../../assets/board_member_pictures/Azraa Abdoul- Headshot.jpg' 
import amos_s from '../../assets/board_member_pictures/amos_s_prof.jpg'
import isabelle_g from '../../assets/board_member_pictures/Isabelle-George-prof.jpeg'

// Technology
import saanvi_v from '../../assets/board_member_pictures/Saanvi_Verma_headshot.jpg'
import disha_t from '../../assets/board_member_pictures/disha_t.jpg'
import shivank_b from '../../assets/board_member_pictures/Shivank-B-prof.jpeg'
import ashar_s from '../../assets/board_member_pictures/Ashar-Siddiqui-prof.JPEG'

// Arnav
import arnav_p from '../../assets/board_member_pictures/Arnav-Patel-prof.jpeg'


// Judging
import srinidhi_g from '../../assets/board_member_pictures/srinidhi_g.jpg'
import mahathi_c from '../../assets/board_member_pictures/mahathi_c.jpg'

// Sponsorship
import dhruvi_k from '../../assets/board_member_pictures/dhruvi_k.jpg'
import sachin_t from  '../../assets/board_member_pictures/sachin_t.jpg'
import rahul_a from  '../../assets/board_member_pictures/rahul_a.jpg'
import tanisha_s from  '../../assets/board_member_pictures/tanisha shah.jpg'



// Public Relations
import manasa_c from  '../../assets/board_member_pictures/ManasaChekuri_headshot_.jpg'
import simran_k from  '../../assets/board_member_pictures/Simran Kumar Headshot.jpg'
import nidhi_p from  '../../assets/board_member_pictures/Nidhi-Patel-prof.jpeg'



// Liaison Head
import paridhi_p from '../../assets/board_member_pictures/Paridhi Parekh HeadShot.jpeg'
import manvi_k from '../../assets/board_member_pictures/Manvi_Kalachagari.jpg'


// Social 
import jiya_a from '../../assets/board_member_pictures/jiya_a.jpg'
import ishaan_d from '../../assets/board_member_pictures/Ishaan Desai.jpg'
import khushi_p from '../../assets/board_member_pictures/KhushiPatel_Headshot.jpg'


// Mixer
import sahana_s from '../../assets/board_member_pictures/SahanaSHeadshot.jpg'
import sanya_g from '../../assets/board_member_pictures/Sanya_Gupta.jpg'
import rayan_s from '../../assets/board_member_pictures/Rayan-Shah-prof.jpeg'
import sania_m from '../../assets/board_member_pictures/Sania-Manyem-prof.png'

import tba from '../../assets/board_member_pictures/person_placeholder.jpg'

import snom from "../../assets/sponsor_images/snom-logo.jpeg";
import classical_image from "../../assets/classical-image.jpeg"
import homepage_image from "../../assets/homepage-image.jpg"
import deepam_png from "../../assets/deepam.png"

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


const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDiwali, setShowGarba] = useState(false);
  const [activeEventTab, setActiveEventTab] = useState('diwali');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGarba(true);
    }, 750);
    return () => clearTimeout(timer);
  }, []);

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

  const handleSmoothScroll = () => {
    const bottomSection = document.querySelector('.bottom-section');
    bottomSection.scrollIntoView({ behavior: 'smooth' });
  }

  const handlePranavClick = () => {
    setShowConfetti(true);
  }

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  }

  const boardMembers = [
    { name: "Pratiksha Das", position: "Director", image: pratiksha_d },
    { name: "Nihira Mulkar", position: "Director", image: nihira_m },
    { name: "Aditya Patel", position: "Director", image: aditya_p },


    { name: "Suhan Neema", position: "Event Operations", image: suhan_n },    
    { name: "Rushina Patel", position: "Event Operations", image: rushina_p },

    { name: "Pranav Palle", position: "Registration", image: pranav_p },
    { name: "Bharvi Patel", position: "Registration", image: bhavri_p },
    { name: "Giridhar Sawhney", position: "Registration", image: giridhar_s },

    { name: "Azraa Abdoul", position: "Hospitality", image: azraa_a },
    { name: "Amos Saudager", position: "Hospitality", image: amos_s },
    { name: "Isabelle George", position: "Hospitality", image: isabelle_g },
    { name: "Apurva Hari", position: "Hospitality", image: apurva_h },

    { name: "Shivank Bhimavarapu", position: "Technology", image: shivank_b },
    { name: "Ashar Siddiqui", position: "Technology", image: ashar_s },
    { name: "Disha Tulsyan", position: "Technology", image: disha_t },
    { name: "Saanvi Verma", position: "Technology", image: saanvi_v },

    { name: "Arnav Patel", position: "Technology / Public Relations", image: arnav_p },

    { name: "Manasa Chekuri", position: "Public Relations", image: manasa_c },
    { name: "Simran Kumar", position: "Public Relations", image: simran_k },
    { name: "Nidhi Patel", position: "Public Relations", image: nidhi_p },
    

    { name: "Mahathi Chintapalli", position: "Judging", image: mahathi_c },
    { name: "Srinidhi Gubba", position: "Judging", image: srinidhi_g },

    { name: "Rahul Anantuni", position: "Sponsorship", image: rahul_a },
    { name: "Dhruvi Khadiwala", position: "Sponsorship", image: dhruvi_k },
    { name: "Tanisha Shah", position: "Sponsorship", image: tanisha_s },
    { name: "Sachin Thapar", position: "Sponsorship", image: sachin_t },



    { name: "Manvi Kalachagari", position: "Liaison Head", image: manvi_k },
    { name: "Paridhi Parekh", position: "Liaison Head", image: paridhi_p },

    { name: "Jiya Amin", position: "Social", image: jiya_a },
    { name: "Ishaan Desai", position: "Social", image: ishaan_d },
    { name: "Khushi Patel", position: "Social", image: khushi_p },

    { name: "Sanya Gupta", position: "Mixer", image: sanya_g },
    { name: "Sania Manyem", position: "Mixer", image: sania_m },
    { name: "Rayan Shah", position: "Mixer", image: rayan_s },
    { name: "Sahana Subbanna", position: "Mixer", image: sahana_s },

  ];

  const groupByPosition = (members) => {
    return members.reduce((acc, member) => {
      if (!acc[member.position]) {
        acc[member.position] = [];
      }
      acc[member.position].push(member);
      return acc;
    }, {});
  };

  const groupedMembers = groupByPosition(boardMembers);


  return (
    <div className='homepage-main-container'>
      <Confetti isActive={showConfetti} onComplete={handleConfettiComplete} />
      <div className='home-container'
            style={{'--homepage-image': `url(${homepage_image})`}}
      >
        <div className='heading-container'>
          <h1 className='homepage-heading'>Maryland Mayuri</h1>
          
          

          {/* <a href="https://www.zeffy.com/en-US/ticketing/mayuri-x-vhpa-garba" target="_blank" className='tickets'>
          <img src={garba_1} height={175} className="ticket1" 
          onMouseOver={e => (e.currentTarget.src=garba_2) (e.currentTarget.height=250)} 
          onMouseOut={e => (e.currentTarget.src=garba_1) (e.currentTarget.height=175)}/>
          </a> */}
        </div>
      </div>

      {/* Event Tabs */}
      <div style={{
        display: 'flex',
        backgroundColor: '#f6f7f2'
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
        <div className="garba-event-section" style={{
          backgroundColor: '#001f3f',
          padding: '100px 20px',
          minHeight: '700px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
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

          {/* Liason Promotion Bubble */}
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
                Wanna Get Involved?
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#010221' }}>
                If you want to get involved with creating amazing events like our Diwali Formal and our Garba,
                then come be a liason with us! Liason help run our competition in the spring, 
                and by becoming one, you can tap into Indian Culture and be a part of 
                one of the best communities at UMD! Click <a href='https://docs.google.com/forms/d/e/1FAIpQLScT6ORv3axopgfVZ62RCZey5HFJ88xWaGYI1jnj2Xlbth2I4g/viewform' target='blank'>this link</a> to learn more.
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
        <div className="diwali-event-section" style={{
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
            {/* diwali Thank You Bubble */}
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

            {/* Liason Promotion Bubble */}
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
                Then you might enojy being a liason for Maryland Mayuri!
                Liasons are essential in running our competition in the spring, so we want you!
                By being a liason, you can tap into the beautiful world of Indian Classical dance,
                and you get to be a part of one of the best communities at UMD!
                Click <a href='https://docs.google.com/forms/d/e/1FAIpQLScT6ORv3axopgfVZ62RCZey5HFJ88xWaGYI1jnj2Xlbth2I4g/viewform' target='blank'>this link</a> to learn more
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


          {/* Photo Link Text for diwali */}
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

      <div id="about-us" className="section-container">
        <div className="section-content-wrapper">
          <div className="section-content">
            <h1 className="section-heading">Who We Are</h1>
            <p className="section-text">
              Founded in 2013, Maryland Mayuri is Maryland&apos;s premier intercollegiate classical Indian dance competition.
              As a registered 501(c)(3) organization, we are dedicated to promoting the art of classical Indian dance.
              Mayuri is proudly hosted and run by passionate students at the University of Maryland, College Park.
            </p>
          </div>
        </div>
        <img src={home_page_image} alt="Maryland Mayuri" className="section-image" />
      </div>

      <div className="section-container reverse">
        <div className="section-content-wrapper" id="classical-wrapper">
          <div className="section-content">
            <h1 className="section-heading" id="classical-heading">Classical Dance</h1>
            <p className="section-text" id="classical-text">
              Classical Indian dance is a timeless art form, deeply rooted in Indian culture for thousands of years.
              It&apos;s a captivating blend of storytelling, music, and drama. India boasts eight distinct classical dance forms,
              each with its unique style and technique. Among the most renowned are Bharatanatyam, Kathak, Odissi, and Kuchipudi,
              each telling stories of tradition, mythology, and emotion through graceful movements and expressive gestures.
            </p>
          </div>
        </div>
        <img src={classical_image} alt="Classical Dance" className="section-image" />
      </div>

      <div className="divider"></div>


      <div id="board" className="board-section">
        <h2 className="board-title">Our Board</h2>
        <div className="board-grid">
          {boardMembers.map((member) => (
            <div key={member.name} className="member-card">
              <div className="member-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="member-image" 
                  loading="lazy"
                  onClick={member.name === "Pranav Palle" ? handlePranavClick : undefined}
                  style={member.name === "Pranav Palle" ? { cursor: 'pointer' } : {}}
                />
              </div>
              <div className="member-info">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="philanthropy" className="philanthropy-section">
        <h2>Our Charity Partner</h2>
        <div className="charity-info">
          <img src={snom} alt="Sankara Nethralaya OM Trust" />
          <div className="charity-content">
            <h3>Sankara Nethralaya OM Trust</h3>
            <p>
              SNOM is a registered non-profit organization in the United States of America.
              The charity was established in 1988 with the main goal of supporting Sankara Nethralaya,
              a nonprofit ophthalmic hospital in Chennai, India. Sankara Nethralaya is a leading super specialty
              institution for ophthalmic care in India.
            </p>
            <a href="https://www.sankaranethralayausa.org/" target="_blank" rel="noopener noreferrer">
              Learn more about their cause
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
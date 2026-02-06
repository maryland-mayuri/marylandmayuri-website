import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../index.css'
import '../../Home.css'
import home_page_image from '../../assets/home-page-image.jpg'
import full_mayuri_board_photo from '../../assets/full-mayuri-board-photo.jpg'
import mayuri_m_photo from '../../assets/mayuri-m-photo.jpg'
import Confetti from '../Confetti'
import mayuriGlitch from '../../assets/mayuri_text_glitch.gif'
import bluePillHand from '../../assets/blue_pill_hand.png'
import redPillHand from '../../assets/red_pill_hand.png'
import garba_1 from "../../assets/garba_tickets/garba-tickets-1.png"
import garba_2 from "../../assets/garba_tickets/garba-tickets-2.png"
import mayuri_ticket from "../../assets/mayuri-ticket.png"
import mission_impossible_text from "../../assets/mission-mayuri.png"

// Directors
import nihira_m from '../../assets/board_member_pictures/director-Nihira-Mulkar.jpeg'
import aditya_p from '../../assets/board_member_pictures/director-Adi-Patel.jpg'



// Event Ops
import suhan_n from '../../assets/board_member_pictures/eventops-Suhan-Neema.jpg'
import rushina_p from '../../assets/board_member_pictures/eventops-Rushina-Patel.jpg'



// Registration
import giridhar_s from '../../assets/board_member_pictures/reg-Giridhar-Sawhney.JPG'
import pranav_p from '../../assets/board_member_pictures/reg-Pranav-Palle.jpg'
import bhavri_p from '../../assets/board_member_pictures/reg-Bharvi-Patel.jpg'


// Hospitality
import apurva_h from '../../assets/board_member_pictures/person_placeholder.jpg'
import azraa_a from '../../assets/board_member_pictures/hosp-Azraa-Abdoul.jpg'
import amos_s from '../../assets/board_member_pictures/hosp-Amos-Saudager.jpg'
import isabelle_g from '../../assets/board_member_pictures/hosp-Isabelle-George.jpg'

// Technology
import saanvi_v from '../../assets/board_member_pictures/tech-Saanvi-Verma.jpg'
import disha_t from '../../assets/board_member_pictures/tech-Disha-Tulsyan.jpg'
import shivank_b from '../../assets/board_member_pictures/tech-Shivank-Bhimavarapu.jpg'
import ashar_s from '../../assets/board_member_pictures/tech-Ashar-Siddiqui.jpeg'

// Arnav
import arnav_p from '../../assets/board_member_pictures/tech-pr-Arnav-Patel.jpg'


// Judging
import srinidhi_g from '../../assets/board_member_pictures/judging-Srinidhi-Gubba.JPG'
import mahathi_c from '../../assets/board_member_pictures/judging-Mahathi-Chinthapalli.jpg'

// Sponsorship
import dhruvi_k from '../../assets/board_member_pictures/spons-Dhruvi-Kadhiwala.jpg'
import sachin_t from '../../assets/board_member_pictures/spons-Sachin-Thapar.jpg'
import rahul_a from '../../assets/board_member_pictures/spons-Rahul-Anantuni.jpg'
import tanisha_s from '../../assets/board_member_pictures/spons-Tanisha-Shah.jpg'



// Public Relations
import manasa_c from '../../assets/board_member_pictures/pr-Manasa-Chekuri.jpg'
import simran_k from '../../assets/board_member_pictures/pr-Simran-Kumar.jpg'
import nidhi_p from '../../assets/board_member_pictures/pr-Nidhi-Patel.jpg'



// Liaison Head
import paridhi_p from '../../assets/board_member_pictures/liaison-Paridhi-Parekh.jpg'
import manvi_k from '../../assets/board_member_pictures/liaison-Manvi-Kalachagari.jpg'


// Social 
import jiya_a from '../../assets/board_member_pictures/social-Jiya-Amin.jpg'
import ishaan_d from '../../assets/board_member_pictures/social-Ishaan-Desai.png'
import khushi_p from '../../assets/board_member_pictures/social-Khushi-Patel.jpg'


// Mixer
import sahana_s from '../../assets/board_member_pictures/mixer-Sahana-Subbanna.jpg'
import sanya_g from '../../assets/board_member_pictures/mixer-Sanya-Gupta.jpg'
import rayan_s from '../../assets/board_member_pictures/mixer-Rayan-Shah.jpg'
import sania_m from '../../assets/board_member_pictures/mixer-Sania-Manyem.jpg'

import tba from '../../assets/board_member_pictures/person_placeholder.jpg'

import snom from "../../assets/sponsor_images/snom-logo.jpeg";
import classical_image from "../../assets/classical-image.jpeg"
import homepage_image from "../../assets/homepage-image.jpg"


const Home = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();
  const nextSectionRef = useRef(null);

  const handleSmoothScroll = () => {
    const bottomSection = document.querySelector('.bottom-section');
    bottomSection.scrollIntoView({ behavior: 'smooth' });
  }

  const handleBluePillClick = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleRedPillClick = () => {
    navigate('/competition');
  }

  const handlePranavClick = () => {
    setShowConfetti(true);
  }

  const handleConfettiComplete = () => {
    setShowConfetti(false);
  }

  const boardMembers = [
    //   { name: "Pratiksha Das", position: "Director", image: pratiksha_d },
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
      <div className='hero-section'>
        <div className="mayuri-ticket-container">
          <img className="mayuri-text" src={mission_impossible_text} alt="mission-impossible-font"/>
          <br />
          <br />
          <a href="https://doorlist.app/e/ub5am90?s=hTtEk7nZf6&utm_source=ig&utm_medium=social&utm_content=link_in_bio" target="_blank" className="mayuri-ticket-link">
            <img src={mayuri_ticket} alt="Maryland Mayuri" className="mayuri-ticket-header" />
            <div className="buy-now-text">Do you accept the mission - Buy Tickets Now!</div>
          </a>
        </div>
        {/* <img src={mayuriGlitch} alt="Maryland Mayuri" className="mayuri-glitch-header" />
        
        <div className='pill-hands-container'>
          <div className='pill-hand-wrapper'>
            <img 
              src={bluePillHand} 
              alt="Blue Pill" 
              onClick={handleBluePillClick}
              className='pill-hand-image'
            />
            <p className='pill-hand-text'>
              Take the blue pill, and everything remains the same
            </p>
          </div>
          
          <div className='pill-hand-wrapper'>
            <img 
              src={redPillHand} 
              alt="Red Pill" 
              onClick={handleRedPillClick}
              className='pill-hand-image'
            />
            <p className='pill-hand-text'>
              Take the red pill, and help Mission Mayuri
            </p>
          </div>
        </div> */}
      </div>

      <Confetti isActive={showConfetti} onComplete={handleConfettiComplete} />
      <div ref={nextSectionRef} className='home-container'
        style={{ '--homepage-image': `url(${mayuri_m_photo})` }}
      >
        <div className='heading-container'>
          <h1 className='homepage-heading'>Maryland Mayuri</h1>
          <br />


          {/* <a href="https://www.zeffy.com/en-US/ticketing/mayuri-x-vhpa-garba" target="_blank" className='tickets'>
          <img src={garba_1} height={175} className="ticket1" 
          onMouseOver={e => (e.currentTarget.src=garba_2) (e.currentTarget.height=250)} 
          onMouseOut={e => (e.currentTarget.src=garba_1) (e.currentTarget.height=175)}/>
          </a> */}
        </div>
      </div>


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
        <img src={full_mayuri_board_photo} alt="Maryland Mayuri" className="section-image" />
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
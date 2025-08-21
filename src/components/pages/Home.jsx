import React from 'react'
import '../../index.css'
import '../../Home.css'
import home_page_image from '../../assets/home-page-image.jpg'

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

// Technology
import saanvi_v from '../../assets/board_member_pictures/Saanvi_Verma_headshot.jpg'
import disha_t from '../../assets/board_member_pictures/disha_t.jpg'
import shivank_b from '../../assets/board_member_pictures/shivank-bhimavarapu-headshot.jpeg'


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


import tba from '../../assets/board_member_pictures/person_placeholder.jpg'

import snom from "../../assets/sponsor_images/snom-logo.jpeg";
import classical_image from "../../assets/classical-image.jpeg"
import homepage_image from "../../assets/homepage-image.jpg"



const Home = () => {
  const handleSmoothScroll = () => {
    const bottomSection = document.querySelector('.bottom-section');
    bottomSection.scrollIntoView({ behavior: 'smooth' });
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
    { name: "Apurva Hari", position: "Hospitality", image: apurva_h },

    { name: "Shivank Bhimavarapu", position: "Technology", image: shivank_b },
    { name: "Disha Tulsyan", position: "Technology", image: disha_t },
    { name: "Saanvi Verma", position: "Technology", image: saanvi_v },

    { name: "Mahathi Chintapalli", position: "Judging", image: mahathi_c },
    { name: "Srinidhi Gubba", position: "Judging", image: srinidhi_g },

    { name: "Rahul Anantuni", position: "Sponsorship", image: rahul_a },
    { name: "Dhruvi Khadiwala", position: "Sponsorship", image: dhruvi_k },
    { name: "Tanisha Shah", position: "Sponsorship", image: tanisha_s },
    { name: "Sachin Thapar", position: "Sponsorship", image: sachin_t },

    { name: "Manasa Chekuri", position: "Public Relations", image: manasa_c },
    { name: "Simran Kumar", position: "Public Relations", image: simran_k },

    { name: "Manvi Kalachagari", position: "Liaison Head", image: manvi_k },
    { name: "Paridhi Parekh", position: "Liaison Head", image: paridhi_p },

    { name: "Jiya Amin", position: "Social", image: jiya_a },
    { name: "Ishaan Desai", position: "Social", image: ishaan_d },
    { name: "Khushi Patel", position: "Social", image: khushi_p },

    { name: "Sanya Gupta", position: "Mixer", image: sanya_g },
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
      <div className='home-container'
            style={{'--homepage-image': `url(${homepage_image})`}}
      >
        <div className='heading-container'>
          <h1 className='homepage-heading'>Maryland Mayuri</h1>
        </div>
      </div>


      <div id="about-us" className="section-container">
        <div className="section-content-wrapper">
          <div className="section-content">
            <h1 className="section-heading">Who We Are</h1>
            <p className="section-text">
              Founded in 2013, Maryland Mayuri is Maryland's premier intercollegiate classical Indian dance competition.
              As a registered 501(c)(3) organization, we are dedicated to promoting the art of classical Indian dance.
              Mayuri is proudly hosted and run by passionate students at the University of Maryland, College Park.
            </p>
          </div>
        </div>
        <img src={home_page_image} alt="Maryland Mayuri" className="section-image" />
      </div>

      <div className="section-container reverse">
        <div className="section-content-wrapper">
          <div className="section-content">
            <h1 className="section-heading">Classical Dance</h1>
            <p className="section-text">
              Classical Indian dance is a timeless art form, deeply rooted in Indian culture for thousands of years.
              It's a captivating blend of storytelling, music, and drama. India boasts eight distinct classical dance forms,
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
                <img src={member.image} alt={member.name} className="member-image" loading="lazy" />
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
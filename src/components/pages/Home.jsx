import React from 'react'
import '../../index.css'
import '../../Home.css'
import home_page_image from '../../assets/home-page-image.jpg'

// Directors
import aakash_p from '../../assets/board_member_pictures/aakash_p.jpg'
import pratiksha_d from '../../assets/board_member_pictures/pratiksha_d.jpg'
import sanjana_c from '../../assets/board_member_pictures/sanjana_c.jpg'

// Event Ops
import teja_n from '../../assets/board_member_pictures/teja_n.jpg'
import shreya_g from '../../assets/board_member_pictures/shreya_g.jpg'

// Registration
import giridhar_s from '../../assets/board_member_pictures/giri_s.jpg'
import saathu_n from '../../assets/board_member_pictures/saathu_n.jpg'

// Hospitality
import nitya_v from '../../assets/board_member_pictures/nitya_v.jpg'
import sakshi_s from '../../assets/board_member_pictures/sakshi_s.jpg'
import suhan_n from '../../assets/board_member_pictures/suhan_n.jpg'
import arya_g from '../../assets/board_member_pictures/arya_g.jpg'

// Technology
import sashu_p from '../../assets/board_member_pictures/sashu_p.jpg'
import ishaan_b from '../../assets/board_member_pictures/ishaan_b.jpg'

// Judging
import srinidhi_g from '../../assets/board_member_pictures/srinidhi_g.jpg'
import shruti_m from '../../assets/board_member_pictures/shruti_m.jpg'

// Sponsorship
import sanjana_s from '../../assets/board_member_pictures/sanjana_s.jpg'
import dhruvi_k from '../../assets/board_member_pictures/dhruvi_k.jpg'
import aditya_p from '../../assets/board_member_pictures/aditya_p.jpg'
import rahul_a from '../../assets/board_member_pictures/rahul_a.jpg'

// Public Relations
import rushina_p from '../../assets/board_member_pictures/rushina_p.jpg'
import sachin_t from  '../../assets/board_member_pictures/sachin_t.jpg'
import nihira_m from '../../assets/board_member_pictures/nihira_m.jpg'

// Liaison Head
import mahathi_c from '../../assets/board_member_pictures/mahathi_c.jpg'


// Social 
import jiya_a from '../../assets/board_member_pictures/jiya_a.jpg'

// Mixer
import aditi_g from '../../assets/board_member_pictures/aditi_g.jpg'
import samaya_t from '../../assets/board_member_pictures/samaya_t.jpg'
import disha_t from '../../assets/board_member_pictures/disha_t.jpg'


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
    { name: "Aakash Patel", position: "Director", image: aakash_p },
    { name: "Pratiksha Das", position: "Director", image: pratiksha_d },
    { name: "Sanjana Chimaladinne", position: "Director", image: sanjana_c },

    { name: "Teja Nallagorla", position: "Event Ops", image: teja_n },
    { name: "Shreya Gavarapattu", position: "Event Ops", image: shreya_g },

    { name: "Giridhar Sawhney", position: "Registration", image: giridhar_s },
    { name: "Saathu Nagareddy", position: "Registration", image: saathu_n },


    { name: "Sakshi Shetty ", position: "Hospitality", image: sakshi_s },
    { name: "Nitya Venkatiagari", position: "Hospitality", image: nitya_v },
    { name: "Arya Ghorpade", position: "Hospitality", image: arya_g },
    { name: "Suhan Neema", position: "Hospitality", image: suhan_n },

    { name: "Sashu Prakash", position: "Technology", image: sashu_p },
    { name: "Ishaan Bhardvaj", position: "Technology", image: ishaan_b },

    { name: "Srinidhi Gubba", position: "Judging", image: srinidhi_g },
    { name: "Shruti Marichetty", position: "Judging", image: shruti_m },

    { name: "Sanjana Sankar", position: "Sponsorship", image: sanjana_s },
    { name: "Aditya Patel", position: "Sponsorship", image: aditya_p },
    { name: "Dhruvi Kadhiwala", position: "Sponsorship", image: dhruvi_k },
    { name: "Rahul Anantuni", position: "Sponsorship", image: rahul_a },

    { name: "Rushina Patel", position: "Public Relations", image: rushina_p },
    { name: "Sachin Thapar", position: "Public Relations", image: sachin_t },
    { name: "Nihira Mulkar", position: "Public Relations", image: nihira_m },

    { name: "Mahathi Chintapalli", position: "Liaison Head", image: mahathi_c },

    { name: "Jiya Amin", position: "Social Chair", image: jiya_a },

    { name: "Aditi Gubba", position: "Mixer", image: aditi_g },
    { name: "Samaya Talluru", position: "Mixer", image: samaya_t },
    { name: "Disha Tulsyan", position: "Mixer", image: disha_t },
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
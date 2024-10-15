import React from 'react'
import '../../index.css'
import '../../Sponsorship.css'

import redbull from "../../assets/sponsor_images/redbull-logo.png";
import celsius from "../../assets/sponsor_images/celsius-logo.png";
import verb from "../../assets/sponsor_images/verb-logo.avif";
import kates_real_food from "../../assets/sponsor_images/kates-logo.png";
import herrs from "../../assets/sponsor_images/herrs-logo.png";
import snom from "../../assets/sponsor_images/snom-logo.jpeg";
import mezcla from "../../assets/sponsor_images/mezcla-logo.png";
import subway from "../../assets/sponsor_images/subway-logo.png";

import placeholder from '../../assets/logo.png'

const Sponsorship = () => {

  const sponsors = [
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://www.redbull.com/us-en/"
    },
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://www.celsius.com/"
    },
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://verbenergy.co/"
    },
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://katesrealfood.com/"
    },
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://www.herrs.com/"
    },
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://eatmezcla.com/"
    },
    {
      name: "TBD", description:
      "",
      img: placeholder, link: "https://subway.com/"
    },

  ]

  return (
    <div className="sponsorship-container">
      <section className="thank-you">
        <h1>Making Magic Possible</h1>
        <p>We extend our heartfelt gratitude to our sponsors for their invaluable support. Your contributions make our annual dance competition a reality, fostering talent and creativity in our community.</p>
      </section>

      <section className="sponsor-grid">
        <h2>Our Sponsors</h2>
        <div className="sponsor-list">
          {sponsors.map((sponsor, index) => (
            <div key={index} className='sponsor-item'>
              <img src={sponsor.img} alt={`${sponsor.name} logo`} />
              <div className="sponsor-item-content">
                <h3>{sponsor.name}</h3>
                {sponsor.description && (
                  <p>{sponsor.description}
                  </p>
                )}
                {sponsor.link && (
                  <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Sponsorship
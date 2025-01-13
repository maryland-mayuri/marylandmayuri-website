import React from 'react'
import '../../index.css'
import '../../Sponsorship.css'

import biryanicitymd from "../../assets/sponsor_images/biryanicity-logo.jpeg";
import subway from "../../assets/sponsor_images/subway-logo.png";
import dominoes from "../../assets/sponsor_images/dominoes-logo.png"
import vhpa from "../../assets/sponsor_images/vhpa.jpg"

import placeholder from '../../assets/logo.png'

const Sponsorship = () => {

  const sponsors = [
    {
      name: "Biryani City", description:
      "",
      img: biryanicitymd, link: "https://biryanicitymd.com/"
    },
    {
      name: "Subway", description:
      "",
      img: subway, link: "https://www.subway.com/en-us"
    },
    {
      name: "Dominoes", description:
      "",
      img: dominoes, link: "https://www.dominos.com/en/"
    },
    {
      name: "VHPA", description:
      "",
      img: vhpa, link: "https://dc.vhp-america.org/rjb/"
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
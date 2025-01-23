import React from 'react'
import '../../index.css'
import '../../Sponsorship.css'

import vhpa from "../../assets/sponsor_images/vhpa.jpg"
import herrs from "../../assets/sponsor_images/herrs-logo.png"
import biryanicitymd from "../../assets/sponsor_images/biryanicity-logo.jpeg";
import subway from "../../assets/sponsor_images/subway-logo.png";
import bakerly from "../../assets/sponsor_images/bakerly-logo.jpeg"
import redbull from "../../assets/sponsor_images/redbull-logo.png"
import dominoes from "../../assets/sponsor_images/dominoes-logo.png" 

import placeholder from '../../assets/logo.png'

const Sponsorship = () => {

  const sponsors = [
    {
      name: "VHPA", description:
      "",
      img: vhpa, link: "https://dc.vhp-america.org/rjb/"
    },
    {
      name: "Herrs", description:
      "",
      img: herrs, link: "https://www.herrs.com/"
    },
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
      name: "Bakerly", description:
      "",
      img: bakerly, link: "https://bakerly.com/?tw_source=google&tw_adid=614464093190&tw_campaign=17940401900&gad_source=1&gclid=Cj0KCQiAy8K8BhCZARIsAKJ8sfSyWEn09d-T7769Tydyk2YFb6Z_ljO3arYu_N8GUYLfTuvmDqvF4joaArVCEALw_wcB"
    },
    {
      name: "Redbull", description:
      "",
      img: redbull, link: "https://www.redbull.com/us-en"
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
              <img loading="lazy" src={sponsor.img} alt={`${sponsor.name} logo`} />
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
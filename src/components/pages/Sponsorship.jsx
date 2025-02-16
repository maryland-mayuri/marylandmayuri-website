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
      "An organization dedicated to promoting Hindu values, unity, and awareness while fostering harmony and respect among all. Its mission includes raising awareness, serving communities, teaching Hindu heritage, and building global networks. Guided by Vedic principles of unity and inclusivity, it aims to educate future generations, advocate for Hindu interests, dispel misconceptions, and provide aid to those in need. It envisions a strong, prosperous, and spiritually enriched society.",
      img: vhpa, link: "https://dc.vhp-america.org/rjb/"
    },
    {
      name: "Herrs", description:
      "Herr's Chips, a leading snack brand, crafts a diverse range of delicious potato chips and snacks. Known for their quality and variety, Herr's offers flavors that cater to every palate. With a commitment to delivering crunchy satisfaction, Herr's continues to be a go-to choice for snack enthusiasts seeking premium taste experiences.",
      img: herrs, link: "https://www.herrs.com/"
    },
    {
      name: "Biryani City", description:
      "Located in North Bethesda, MD, Biryani City brings the authentic taste of India to your table, blending rich spices, fresh ingredients, and traditional cooking techniques. Every dish tells a story of heritage and passion, offering a culinary experience that warms the heart and satisfies the soul. Whether you're savoring a flavorful biryani or indulging in classic Indian delicacies, Biryani City is your destination for a truly delightful dining experience.",
      img: biryanicitymd, link: "https://biryanicitymd.com/"
    },
    {
      name: "Subway", description:
      "The Subway in College Park, MD, a part of a global fast-food franchise, offers a diverse menu of customizable sandwiches and salads. Known for its fresh ingredients and quick service, Subway allows customers to build their sandwiches to suit personal preferences. With a commitment to healthier options, Subway continues to be a popular choice for on-the-go dining worldwide.",
      img: subway, link: "https://www.subway.com/en-us"
    },
    {
      name: "Redbull", description:
      "Red Bull, an iconic energy drink brand, energizes consumers with its unique blend of caffeine, taurine, and B-vitamins. Renowned for its invigorating effects, Red Bull provides a boost in physical and mental performance. With a distinct flavor and vibrant marketing, it has become a symbol of energy and vitality globally.",
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
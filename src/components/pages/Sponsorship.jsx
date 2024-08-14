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

const Sponsorship = () => {

  const sponsors = [
    {
      name: "Red Bull", description:
        "Red Bull, an iconic energy drink brand, energizes consumers with its unique blend of caffeine, taurine, and B-vitamins. Renowned for its invigorating effects, Red Bull provides a boost in physical and mental performance. With a distinct flavor and vibrant marketing, it has become a symbol of energy and vitality globally.",
      img: redbull, link: "https://www.redbull.com/us-en/"
    },
    {
      name: "Celsius", description:
        "Celsius is a revolutionary energy drink that fuels your day with a blend of natural ingredients designed to ignite your metabolism and enhance performance. It is packed with vitamins and minerals and no artificial preservatives to deliver a refreshing burst of energy without the crash! Celsius drinks are refreshing and popular, and have set a new standard in the world of energy drinks.",
      img: celsius, link: "https://www.celsius.com/"
    },
    {
      name: "Verb", description:
        "Verb Energy is a great way to elevate your energy without the need for overpriced coffee or jittery-inducing energy drinks! Packed with natural ingredients and fueled by green tea caffeine, Verb Energy bars deliver a clean and sustained boost without the crash. Whether you're powering through work or seizing the day, choose Verb for a delicious, guilt-free source of energy. Amongst all energy bars, Verb Energy stands out with their clean, tasty mission!",
      img: verb, link: "https://verbenergy.co/"
    },
    {
      name: "Kate's Real Food", description:
        "Kate's Real Food is a company dedicated to providing a premium selection of energy bars meticulously crafted for both taste and nutrition! These delicious, organic energy bars are crafted with premium, simple ingredients to promote the vision of “the good life”. Perfect for on-the-go moments or outdoor escapades, Kate's Real Food bars are your go-to companion for a taste that excites and fuels your active lifestyle.",
      img: kates_real_food, link: "https://katesrealfood.com/"
    },
    {
      name: "Herrs", description:
        "Herr's Chips, a leading snack brand, crafts a diverse range of delicious potato chips and snacks. Known for their quality and variety, Herr's offers flavors that cater to every palate. With a commitment to delivering crunchy satisfaction, Herr's continues to be a go-to choice for snack enthusiasts seeking premium taste experiences.",
      img: herrs, link: "https://www.herrs.com/"
    },
    {
      name: "Mezcla", description:
        "Mezcla is a one-of-a-kind brand that is pushing boundaries by producing plant-based, vegan protein bars. With six distinctive flavors, Mezcla bars are a sweet treat for anyone, and while also energy and satisfaction, they are committed towards combating food insecurity and promoting sustainability as part of their mission. Mezcla is redefining the energy bar experience - it is your go-to for a delectable and energizing treat that stands out in a crowded market.",
      img: mezcla, link: "https://eatmezcla.com/"
    },
    {
      name: "Subway", description:
        "The Subway in New Carrollton MD, a part of a global fast-food franchise, offers a diverse menu of customizable sandwiches and salads. Known for its fresh ingredients and quick service, Subway allows customers to build their sandwiches to suit personal preferences. With a commitment to healthier options, Subway continues to be a popular choice for on-the-go dining worldwide.",
      img: subway, link: "https://subway.com/"
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
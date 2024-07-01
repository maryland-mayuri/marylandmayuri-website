import React from 'react'
import '../../index.css'
import '../../Sponsorship.css'

import redbull from "../../assets/redbull-logo.png";
import celsius from "../../assets/celsius-logo.png";
import verb from "../../assets/verb-logo.avif";
import kates_real_food from "../../assets/kates-logo.png";
import herrs from "../../assets/herrs-logo.png";
import snom from "../../assets/snom-logo.jpeg";

const Sponsorship = () => {

  const sponsors = [
    {name: "Red Bull", description: "On a sunny afternoon, the park buzzed with life. Children laughed and played, their colorful kites soaring high. The scent of blooming flowers filled the air, mingling with the aroma of fresh popcorn from a nearby vendor. A group of friends lounged on the grass, sharing stories and snacks, their carefree chatter harmonizing with the distant hum of a lawnmower. Birds chirped from the treetops, their melodies blending with the rustling leaves. An elderly couple strolled hand in hand, reminiscing about their youth. The vibrant scene painted a perfect picture of joy and simplicity, a momentary escape from the bustling world.", img: redbull, link:"https://www.redbull.com/us-en/"},
    {name: "Celsius", description: "On a sunny afternoon, the park buzzed with life. Children laughed and played, their colorful kites soaring high. The scent of blooming flowers filled the air, mingling with the aroma of fresh popcorn from a nearby vendor. A group of friends lounged on the grass, sharing stories and snacks, their carefree chatter harmonizing with the distant hum of a lawnmower. Birds chirped from the treetops, their melodies blending with the rustling leaves. An elderly couple strolled hand in hand, reminiscing about their youth. The vibrant scene painted a perfect picture of joy and simplicity, a momentary escape from the bustling world.", img: celsius, link:""},
    {name: "Verb", description: "On a sunny afternoon, the park buzzed with life. Children laughed and played, their colorful kites soaring high. The scent of blooming flowers filled the air, mingling with the aroma of fresh popcorn from a nearby vendor. A group of friends lounged on the grass, sharing stories and snacks, their carefree chatter harmonizing with the distant hum of a lawnmower. Birds chirped from the treetops, their melodies blending with the rustling leaves. An elderly couple strolled hand in hand, reminiscing about their youth. The vibrant scene painted a perfect picture of joy and simplicity, a momentary escape from the bustling world.", img: verb, link:""},
    {name: "Kates Real Food", description: "On a sunny afternoon, the park buzzed with life. Children laughed and played, their colorful kites soaring high. The scent of blooming flowers filled the air, mingling with the aroma of fresh popcorn from a nearby vendor. A group of friends lounged on the grass, sharing stories and snacks, their carefree chatter harmonizing with the distant hum of a lawnmower. Birds chirped from the treetops, their melodies blending with the rustling leaves. An elderly couple strolled hand in hand, reminiscing about their youth. The vibrant scene painted a perfect picture of joy and simplicity, a momentary escape from the bustling world.", img: kates_real_food, link:""},
    {name: "Herrs", description: "On a sunny afternoon, the park buzzed with life. Children laughed and played, their colorful kites soaring high. The scent of blooming flowers filled the air, mingling with the aroma of fresh popcorn from a nearby vendor. A group of friends lounged on the grass, sharing stories and snacks, their carefree chatter harmonizing with the distant hum of a lawnmower. Birds chirped from the treetops, their melodies blending with the rustling leaves. An elderly couple strolled hand in hand, reminiscing about their youth. The vibrant scene painted a perfect picture of joy and simplicity, a momentary escape from the bustling world.", img: herrs, link:""}
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

      <section className="philanthropy">
        <h2>Our Charity Partner</h2>
        <div className="charity-info">
          <img src={snom} alt="Sankara Nethralaya OM Trust" />
          <div className="charity-content">
            <h3>Charity Name</h3>
            <p>Description of the charity's mission and impact on the community.</p>
            <a href="https://charity-website.com" target="_blank" rel="noopener noreferrer">Learn More About Our Cause</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsorship
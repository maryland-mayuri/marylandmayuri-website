import React from 'react'
import '../../index.css'
import '../../Sponsorship.css'

import vhpa from "../../assets/sponsor_images/vhpa.jpg"
import lmnt from "../../assets/sponsor_images/lmnt-logo.png"
import herrs from "../../assets/sponsor_images/herrs-logo.png"
import celsius from "../../assets/sponsor_images/celsius-logo.jpeg"
import klogo from "../../assets/sponsor_images/klogo.png"



import placeholder from '../../assets/logo.png'

const Sponsorship = () => {

  const sponsors = [
    {
      name: "VHPA", description:
      "An organization dedicated to promoting Hindu values, unity, and awareness while fostering harmony and respect among all. Its mission includes raising awareness, serving communities, teaching Hindu heritage, and building global networks. Guided by Vedic principles of unity and inclusivity, it aims to educate future generations, advocate for Hindu interests, dispel misconceptions, and provide aid to those in need. It envisions a strong, prosperous, and spiritually enriched society.",
      img: vhpa, link: "https://dc.vhp-america.org/rjb/"
    },

    {
      name: "HERR's", description:
      "Herr’s is a family-owned snack company known for its commitment to quality ingredients, community support, and creating bold, flavorful chips enjoyed nationwide. They have built their reputation on crafting snacks with care, consistency, and authentic flavor. Herr’s continues to invest in sustainable practices and local outreach initiatives that strengthen the communities they serve. With decades of tradition, the brand remains dedicated to delivering snacks that bring people together.",
      img: herrs, link: "https://www.herrs.com/"
    },

    {
      name: "Celsius", description:
      "Celsius is a fitness-focused energy drink brand committed to clean ingredients, sustained energy, and empowering active lifestyles. Formulated with functional ingredients and no artificial preservatives, Celsius promotes healthier performance without the crash. The brand is rooted in supporting wellness journeys, from everyday routines to high-intensity training. Their mission centers on helping people feel energized, motivated, and ready to take on their goals.",
      img: celsius, link: "https://www.celsius.com/"
    },

    {
      name: "LMNT", description:
      "LMNT is a zero-sugar electrolyte drink mix formulated to deliver optimal hydration and performance through science-backed mineral balance. Designed for athletes, performers, and anyone seeking better daily hydration, LMNT provides a precise combination of sodium, potassium, and magnesium. The brand emphasizes clean formulation—no sugar, gluten, or unnecessary additives—to support peak physical and mental output. LMNT champions transparent nutrition and fueling people to feel and perform their best.",
      img: lmnt, link: "https://drinklmnt.com/"
    },
    
    {
      name: "Kadhiwala Hotels Group", description:
      "Kadhiwala Hotels is a family-driven hospitality group committed to delivering exceptional comfort, service, and value to every guest. With a strong foundation built on years of experience in hotel ownership and management, Kadhiwala Hotels proudly serves business travelers, families, and long-term guests by providing clean, welcoming, and well-maintained properties. Each stay is thoughtfully designed to combine convenience, affordability, and personalized service, ensuring guests feel at home from the moment they arrive. Because our reputation is built on repeat guests and word-of-mouth referrals, our goal is simple: to exceed expectations and create a stay you’ll want to return to.",
      img: klogo, link: "http://jayrjkinc.com/Home"
    }


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
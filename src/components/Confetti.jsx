import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import kajuBurfi1 from '../assets/kaju_burfis/kaju_burfi_1.png';
import kajuBurfi2 from '../assets/kaju_burfis/kaju_burfi_2.png';
import kajuBurfi3 from '../assets/kaju_burfis/kaju_burfi_3.png';
import kajuBurfi4 from '../assets/kaju_burfis/kaju_burfi_4.png';
import kajuBurfi5 from '../assets/kaju_burfis/kaju_burfi_5.png';

const Confetti = ({ isActive, onComplete }) => {
  const [particles, setParticles] = useState([]);
  
  const kajuBurfiImages = [kajuBurfi1, kajuBurfi2, kajuBurfi3, kajuBurfi4, kajuBurfi5];

  useEffect(() => {
    if (!isActive) {
      setParticles([]);
      return;
    }

    // Create 10 copies of each kaju burfi image (50 total particles)
    const newParticles = [];
    kajuBurfiImages.forEach((image, imageIndex) => {
      for (let i = 0; i < 10; i++) {
        newParticles.push({
          id: `${imageIndex}-${i}`,
          image: image,
          x: Math.random() * window.innerWidth,
          y: -100 - Math.random() * 200, // Start above viewport
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 10,
          fallSpeed: 2 + Math.random() * 3,
          swaySpeed: (Math.random() - 0.5) * 2,
          swayAmount: Math.random() * 50,
          size: 0.8 + Math.random() * 0.4, // Random size between 0.8 and 1.2
        });
      }
    });

    setParticles(newParticles);

    // Animation loop
    const animationId = requestAnimationFrame(function animate() {
      setParticles(prevParticles => {
        const updatedParticles = prevParticles.map(particle => ({
          ...particle,
          y: particle.y + particle.fallSpeed,
          x: particle.x + Math.sin(particle.y * 0.01) * particle.swayAmount * 0.01,
          rotation: particle.rotation + particle.rotationSpeed,
        })).filter(particle => particle.y < window.innerHeight + 200); // Remove particles below viewport

        if (updatedParticles.length === 0) {
          onComplete();
          return [];
        }

        requestAnimationFrame(animate);
        return updatedParticles;
      });
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="confetti-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 1000,
    }}>
      {particles.map(particle => (
        <img
          key={particle.id}
          src={particle.image}
          alt="Kaju Burfi"
          style={{
            position: 'absolute',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: `rotate(${particle.rotation}deg) scale(${particle.size})`,
            width: '60px',
            height: '60px',
            objectFit: 'contain',
            transition: 'none',
          }}
        />
      ))}
    </div>
  );
};

Confetti.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Confetti; 
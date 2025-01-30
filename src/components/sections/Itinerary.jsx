import React from 'react';
import '../styles/Itinerary.css';
import roseBackground from '../../assets/images/rose.png'; // Imagen de fondo

const Itinerary = () => {
  const itineraries = [
    {
      id: 1,
      title: 'Reception',
      description: 'A wonderful evening with friends and family.',
      buttonText: 'See more',
      backgroundImage: roseBackground,
    },
    {
      id: 2,
      title: 'Ceremony',
      description: 'A beautiful ceremony to celebrate love.',
      buttonText: 'See more',
      backgroundImage: roseBackground,
    },
    {
      id: 3,
      title: 'Dinner',
      description: 'Enjoy a delightful meal with us.',
      buttonText: 'See more',
      backgroundImage: roseBackground,
    },
  ];

  return (
    <section className="itinerary-section">
      <h2 className="itinerary-title-main">Itinerary</h2>
      <div className="itinerary-container">
        {itineraries.map((item) => (
          <div key={item.id} className="itinerary-card" style={{ backgroundImage: `url(${item.backgroundImage})` }}>
            <div className="itinerary-frame">
              <div className="itinerary-content">
                <h2 className="itinerary-title">{item.title}</h2>
                <p className="itinerary-description">{item.description}</p>
                <button className="itinerary-button">{item.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Itinerary;

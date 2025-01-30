import React from 'react';
import coupleImage from '../../assets/images/couple.jpg'; // Imagen de la pareja

const About = () => {
  return (
    <div className="container my-5" id="about" style={{ maxWidth: '900px' }}>
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#444' }}>
        Our Story
      </h2>
      <div className="row align-items-center mb-5">
        {/* Imagen a la izquierda */}
        <div className="col-md-6 text-center">
          <img
            src={coupleImage}
            alt="Couple"
            className="img-fluid rounded shadow"
            style={{ border: '5px solid #eee', borderRadius: '15px' }}
          />
        </div>
        <div className="col-md-6">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
            Sara and Daniel met at a small café in Cambridge. Since then, their journey has been
            full of <strong>love</strong>, <strong>laughter</strong>, and unforgettable memories.
          </p>
        </div>
      </div>
      <div className="row align-items-center mb-5">
        {/* Imagen a la derecha */}
        <div className="col-md-6 order-md-2 text-center">
          <img
            src={coupleImage}
            alt="Couple"
            className="img-fluid rounded shadow"
            style={{ border: '5px solid #eee', borderRadius: '15px' }}
          />
        </div>
        <div className="col-md-6 order-md-1">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
            They shared their first adventure exploring the streets of London, discovering hidden
            gems, and creating memories that would last a lifetime.
          </p>
        </div>
      </div>
      <div className="row align-items-center">
        {/* Imagen a la izquierda */}
        <div className="col-md-6 text-center">
          <img
            src={coupleImage}
            alt="Couple"
            className="img-fluid rounded shadow"
            style={{ border: '5px solid #eee', borderRadius: '15px' }}
          />
        </div>
        <div className="col-md-6">
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#555' }}>
            A year later, they moved to a cozy home in Tegucigalpa, where they built a life filled
            with happiness, shared dreams, and the support of friends and family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

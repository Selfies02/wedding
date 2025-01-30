import React, { useState, useEffect } from 'react';

const Photos = () => {
  const [index, setIndex] = useState(0);

  const photos = [
    'https://static.wixstatic.com/media/cc969f_12cf5c442e174fff8bd6dd4740deaed3~mv2.jpg',
    'https://static.wixstatic.com/media/cc969f_30092db6c25e4f8ebf3004244b709e0b~mv2.jpg',
    'https://nupciasmagazine.com/wp-content/uploads/2022/09/osarugue-igbinoba-pcBQagGQySM-unsplash-scaled.jpg',
    'https://cdn0.matrimonio.com.pe/article-vendor/2609/3_2/960/jpg/chromo-25_11_142609-164856637289705.jpeg',
  ];

  // Duplicar fotos para un collage de 12 imágenes
  const collagePhotos = [...photos, ...photos, ...photos];

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  // Cambiar la imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [photos.length]);

  return (
    <section id="photos" className="photos-section">
      <h2 className="photos-title">Memories</h2>
      <div className="carousel-3d-container">
        <div className="carousel-3d">
          {photos.map((photo, idx) => {
            let position = 'next';
            if (idx === index) position = 'active';
            else if (idx === (index - 1 + photos.length) % photos.length) position = 'prev';

            return (
              <div key={idx} className={`carousel-item-3d ${position}`}>
                <img src={photo} alt={`Slide ${idx + 1}`} className="carousel-image" />
              </div>
            );
          })}
        </div>
        <button className="carousel-control prev" onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-control next" onClick={handleNext}>
          ❯
        </button>
      </div>

      {/* Collage de imágenes */}
      <div className="photo-collage">
        {collagePhotos.map((photo, idx) => (
          <div key={idx} className="collage-item">
            <img src={photo} alt={`Collage ${idx + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;

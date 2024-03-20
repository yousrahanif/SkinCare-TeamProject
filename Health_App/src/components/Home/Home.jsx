import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1475207479/photo/face-fruits-and-women-in-portrait-with-cream-for-facial-care-beauty-and-natural-cosmetics.webp?b=1&s=170667a&w=0&k=20&c=rrzfEBcuc5Fq8cGamkFpq1kPZnHJ60cFTlywjyIrDeM=",
    "https://burst.shopifycdn.com/photos/skincare-treatment-and-a-nice-coffee.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://media.istockphoto.com/id/1494935138/photo/organic-cosmetics-with-ingredients.webp?b=1&s=170667a&w=0&k=20&c=093MogHUdEKEgX_d7X6BU9FBG4WoYJr4_3MzKMti008=",
    "https://media.istockphoto.com/id/1357956420/photo/cute-lady-using-cosmetic-product-in-studio.jpg?s=612x612&w=0&k=20&c=Z5YIgH1Wv1zjOrJwjvtnQIGlitN3EGHMuKkiUXZqrUU=",
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Welcome to Our Skincare Hub</h1>
        <p className='text-2xl'>Discover skincare tips, book appointments, and establish your skincare routine.</p>
      </header>
      <main>
        <section className="hero">
          <h2>Transform Your Skin</h2>
          <div className="image-container">
            <img src={images[currentImageIndex]} alt="Skin Transformation" />
            <button className="prev" onClick={handlePrev}>
              &#10094;
            </button>
            <button className="next" onClick={handleNext}>
              &#10095;
            </button>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <img src="https://www.advancedderm.com/getattachment/About-Us/News/The-Top-4-Reasons-to-See-an-Aesthetician-1/Capture-2.JPG?width=315&height=215" alt="Patient and Doctor" />
            <h3 className='mt-4 text-3xl'>Consultations</h3>
            <p>Receive expert advice tailored to your skin type and concerns.</p>
          </div>
          <div className="feature">
            <img src="https://www.naturalhealers.com/wp-content/uploads/2021/12/holistic-skincare-450x300-1.jpg" alt="Skincare Consultation" />
            <h3 className='mt-4 text-3xl'>Skincare Education</h3>
            <p>Stay informed about the latest skincare trends and techniques.</p>
          </div>
          <div className="feature">
            <img src="https://radium-aesthetics.com/wp-content/uploads/2023/03/Skin-Care-Regime-Featured-Image.jpg" alt="Routine Planning" />
            <h3 className='mt-4 text-3xl'>Routine Builder</h3>
            <p>Create a personalized skincare routine with our easy-to-use tools.</p>
          </div>
        </section>
      </main>
      <footer className=' bg-sky-200'>
        <p>&copy; 2024 Skincare Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;


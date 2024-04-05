import React from 'react';
import "./Rosacea.css"
import { Link } from 'react-router-dom';

const Rosacea = () => {
    return (
        <div className="rosacea-overview">
        <h1>Overview of Rosacea</h1>
        <p>Rosacea is a chronic inflammatory skin condition characterized by reddened skin and a rash, commonly affecting the nose and cheeks. It may also lead to eye problems. While there is no cure for rosacea, treatment options can help manage symptoms and prevent flare-ups.</p>
        <br/>
        <p>
        Rosacea can affect anyone, but it is more common in middle-aged and older adults, especially women. Fair-skinned individuals are also at higher risk, and there may be a genetic predisposition to the condition.</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Rosacea.jpg" alt="Rosacea" />
        <div className="section">
          <h2>Who Gets Rosacea?</h2>
          <p>Rosacea is more common among middle-aged and older adults, especially women. Fair-skinned individuals are also at higher risk, and there may be a genetic predisposition to the condition.</p>
        </div>
        <div className="section">
          <h2>Symptoms of Rosacea</h2>
          <p>Common symptoms of rosacea include:</p>
          <ul>
              <li>Facial redness, often accompanied by a sense of tingling or burning.</li>
              <li>Rash with red or pus-filled bumps resembling acne.</li>
              <li>Visible blood vessels as thin red lines on the cheeks and nose.</li>
              <li>Skin thickening, especially on the nose, giving it an enlarged appearance.</li>
              <li>Eye irritation, including soreness, redness, itching, and dryness.</li>
          </ul>
        </div>
        <div className="section">
          <h2>Causes of Rosacea</h2>
          <p>The exact cause of rosacea is unknown, but inflammation likely plays a key role. Factors such as heightened skin sensitivity, environmental stressors like UV light exposure, and microbial influences may contribute to its development. Both genetic and environmental factors are believed to be involved.</p>
        </div>
        <div className="section">
          <h2>Treatment</h2>
          <p>Treatment options for rosacea aim to manage symptoms and prevent flare-ups. They may include:</p>
          <ul>
              <li>Topical creams or gels to reduce redness and inflammation.</li>
              <li>Oral medications, such as antibiotics or anti-inflammatories.</li>
              <li>Eye drops or ointments for ocular rosacea.</li>
              <li>Lifestyle changes, such as avoiding triggers like sun exposure and stress.</li>
              <li>In severe cases, procedures like laser therapy or surgery may be necessary.</li>
          </ul>
          <p>Consultation with a dermatologist is recommended to determine the most appropriate treatment plan for individual cases of rosacea.</p>
        </div>
        <button className="button"> <Link to="/diseases">Go Back to Diseases</Link> </button>
      </div>
  
    );
};

export default Rosacea;
import React from 'react';
import "./Cancer.css"
import { Link } from 'react-router-dom';

const Cancer = () => {
    return (
        <div className="skin-cancer-overview">
        <h1>Overview of Skin Cancer</h1>
        <p>Skin cancer is the abnormal growth of skin cells, most often triggered by exposure to ultraviolet (UV) radiation from sunlight or artificial sources like tanning beds. It is the most common type of cancer worldwide.</p>
        <img src="https://media.post.rvohealth.io/wp-content/uploads/sites/3/2023/03/skin-cancer-face-1296x728-slide1.png" alt="cancer" />
        <br/>
        <p>There are several types of skin cancer, including:</p>
        <ul>
          <li>Basal cell carcinoma (BCC)</li>
          <li>Squamous cell carcinoma (SCC)</li>
          <li>Melanoma</li>
        </ul>
        <p>Skin cancer can affect anyone, but people with fair skin, a history of sunburns, excessive UV exposure, a weakened immune system, or a family history of skin cancer are at higher risk.</p>
        <div className="section">
          <h2>Symptoms of Skin Cancer</h2>
          <p>Symptoms of skin cancer may include:</p>
          <ul>
            <li>New or changing moles</li>
            <li>Sores that don't heal</li>
            <li>Redness or swelling beyond the border of a mole</li>
            <li>Itching, tenderness, or pain in a mole</li>
            <li>Changes in texture or color of the skin</li>
          </ul>
          <p>Early detection and treatment are crucial for successful outcomes in skin cancer. Regular skin self-exams and dermatological screenings are recommended.</p>
        </div>
        <div className="section">
          <h2>Causes of Skin Cancer</h2>
          <p>Exposure to UV radiation is the primary cause of skin cancer. Other risk factors include:</p>
          <ul>
            <li>Fair skin, light hair, and light-colored eyes</li>
            <li>History of sunburns</li>
            <li>Excessive UV exposure from sunlight or tanning beds</li>
            <li>Weakened immune system</li>
            <li>Family history of skin cancer</li>
          </ul>
          <p>Preventive measures such as wearing sunscreen, protective clothing, and avoiding tanning beds can reduce the risk of skin cancer.</p>
        </div>
        <div className="section">
          <h2>Treatment of Skin Cancer</h2>
          <p>Treatment options for skin cancer depend on the type, size, location, and stage of the cancer. They may include:</p>
          <ul>
            <li>Surgical excision</li>
            <li>Mohs surgery</li>
            <li>Chemotherapy</li>
            <li>Radiation therapy</li>
            <li>Immunotherapy</li>
            <li>Targeted therapy</li>
          </ul>
          <p>Early-stage skin cancers are often curable, but advanced cases may require more aggressive treatment and can be life-threatening if left untreated.</p>
        </div>
        <button className="button"> <Link to="/diseases">Go Back to Diseases</Link> </button>
      </div>
      
    );
};

export default Cancer;
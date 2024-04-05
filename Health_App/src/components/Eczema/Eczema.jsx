import React from 'react';
import "./Eczema.css"
import { Link } from 'react-router-dom';

const Eczema = () => {
    return (
        <div className="eczema-overview">
        <h1>Overview of Atopic Dermatitis (Eczema)</h1>
        <p>Atopic dermatitis, often referred to as eczema, is a chronic inflammatory skin condition that causes inflammation, redness, and irritation of the skin. It commonly begins in childhood but can affect individuals of any age. Atopic dermatitis is not contagious and can lead to periods of flares and remissions.</p>
        <br/>
        <p>Researchers do not fully understand the exact cause of atopic dermatitis, but it is believed to involve a combination of genetic, immune system, and environmental factors.</p>
        <div className="section">
          <h2>Who Gets Atopic Dermatitis?</h2>
          <p>Atopic dermatitis is common and typically appears during infancy and childhood. While it may resolve for some children before adolescence, others may continue to experience symptoms into adulthood. The chance of developing atopic dermatitis is higher in individuals with a family history of the condition, hay fever, or asthma.</p>
          <img src="https://images.ctfassets.net/4f3rgqwzdznj/X8VKGlnBiitHWLmFn2vme/9456afa35f5a07e68a3e6ae3f6097b54/face_eczema-1031985760.jpg" alt="Eczema" />
        </div>
        <div className="section">
          <h2>Symptoms of Atopic Dermatitis</h2>
          <p>Common symptoms of atopic dermatitis include:</p>
          <ul>
            <li>Extreme itching.</li>
            <li>Red, dry patches of skin.</li>
            <li>Rashes that may ooze, weep clear fluid, or bleed when scratched.</li>
            <li>Thickening and hardening of the skin.</li>
          </ul>
          <p>The appearance and location of the rash can vary depending on age, with infants commonly affected on the face, scalp, and areas around joints, while children and adults may experience rashes on the elbows, knees, neck, ankles, and other areas.</p>
        </div>
        <div className="section">
          <h2>Complications of Atopic Dermatitis</h2>
          <p>Complications of atopic dermatitis can include bacterial or viral skin infections, sleep disturbances, hand eczema, eye problems such as conjunctivitis and blepharitis, and other skin diseases or mental health issues like depression or anxiety.</p>
        </div>
        <div className="section">
          <h2>Causes of Atopic Dermatitis</h2>
          <p>While the exact cause of atopic dermatitis is unknown, it is thought to involve changes in the skin barrier, immune system dysfunction, and environmental triggers. Genetic factors, immune system abnormalities, and exposure to certain environmental factors like tobacco smoke or air pollutants may contribute to the development of atopic dermatitis.</p>
        </div>
        <div className="section">
          <h2>Treatment of Atopic Dermatitis</h2>
          <p>Treatment for atopic dermatitis aims to alleviate symptoms and prevent flare-ups. It may include:</p>
          <ul>
            <li>Moisturizers to hydrate the skin and restore the skin barrier.</li>
            <li>Topical corticosteroids or calcineurin inhibitors to reduce inflammation and itching.</li>
            <li>Antihistamines to relieve itching and help with sleep.</li>
            <li>Oral medications like corticosteroids or immunosuppressants for severe cases.</li>
            <li>Wet wrap therapy or phototherapy in some instances.</li>
            <li>Avoiding triggers such as certain fabrics, soaps, or allergens.</li>
            <li>Proper skincare routines and lifestyle modifications.</li>
          </ul>
          <p>Consultation with a dermatologist or allergist is recommended to develop a personalized treatment plan for managing atopic dermatitis.</p>
        </div>
        <button className="button"> <Link to="/diseases">Go Back to Diseases</Link> </button>
      </div>
      
    );
};

export default Eczema;
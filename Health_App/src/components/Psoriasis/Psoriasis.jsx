import React from 'react';
import "./Psoriasis.css"
import { Link } from 'react-router-dom';

const Psoriasis = () => {
    return (
        <div className="psoriasis-overview">
        <h1>Overview of Psoriasis</h1>
        <p>Psoriasis is a chronic immune-mediated disease characterized by the rapid multiplication of skin cells, leading to scaly and inflamed patches. It primarily affects areas such as the scalp, elbows, and knees, but can occur on any part of the body. While the exact cause is not fully understood, it is believed to involve a combination of genetic and environmental factors.</p>
        <br/>
        <p>
        The symptoms of psoriasis can vary in severity and may include cycles of flare-ups and remissions. Treatment options range from topical creams for mild cases to systemic medications and light therapy for more severe forms. Managing triggers such as stress and skin injuries can also help control symptoms.</p>
        <br/>
        <p>
        Psoriasis is associated with several comorbidities, including psoriatic arthritis, cardiovascular events, mental health issues, and an increased risk of certain cancers and other diseases.</p>
        <img src="https://www.shutterstock.com/image-photo/seborrheic-dermatitis-adult-face-isolated-260nw-1044660673.jpg" alt="Psoriasis" />
        <div className="section">
          <h2>Who Gets Psoriasis?</h2>
          <p>Psoriasis can affect individuals of any age, but it is more common in adults. Both men and women are equally susceptible to the condition.</p>
        </div>
        <div className="section">
          <h2>Types of Psoriasis</h2>
          <p>Psoriasis manifests in various forms, including:</p>
          <ul>
          <li>Plaque psoriasis: Characterized by raised, red patches covered by silvery-white scales.</li>
          <li>Guttate psoriasis: Appears as small, red dots, often triggered by infections.</li>
          <li>Pustular psoriasis: Involves pus-filled bumps, usually affecting the hands and feet.</li>
          <li>Inverse psoriasis: Smooth, red patches in skin folds.</li>
          <li>Erythrodermic psoriasis: Rare but severe form with widespread red, scaly skin.</li>
        </ul>
        </div>
        <div className="section">
          <h2>Symptoms of Psoriasis</h2>
          <p>Common symptoms of psoriasis include:</p>
          <ul>
              <li>Thick, red patches of skin with silvery-white scales.</li>
              <li>Dry, cracked skin that may itch or bleed.</li>
              <li>Ridged, pitted nails.</li>
              <li>Poor sleep quality.</li>
          </ul>
        </div>
        <div className="section">
          <h2>Causes of Psoriasis</h2>
          <p>Psoriasis is an immune-mediated disease triggered by a combination of genetic and environmental factors. Immune cells become overactive, leading to rapid skin cell production and inflammation.</p>
          <p>External factors that may contribute to psoriasis include infections, certain medications, smoking, and obesity.</p>
        </div>
        <div className="section">
          <h2>Treatment</h2>
          <p>Treatment options for psoriasis vary depending on the type and severity of the condition. They may include topical creams, systemic medications, light therapy, and lifestyle changes to manage triggers. Early intervention is crucial to prevent complications.</p>
        </div>
        <button className="button"> <Link to="/diseases">Go Back to Diseases</Link> </button>
      </div>
  
    );
};

export default Psoriasis;
import React from 'react';
import "./Acne.css"
import { Link } from 'react-router-dom';

const Acne = () => {
    return (
        <div className="acne-overview">
      <h1>Overview of Acne</h1>
      <p>Acne is a common skin condition that happens when hair follicles under the skin become clogged. Sebum—oil that helps keep skin from drying out—and dead skin cells plug the pores, which leads to outbreaks of lesions, commonly called pimples or zits. Most often, the outbreaks occur on the face but can also appear on the back, chest, and shoulders.</p>
      <br/>
      <p>
      Acne is an inflammatory disorder of the skin, which has sebaceous (oil) glands that connects to the hair follicle, which contains a fine hair. In healthy skin, the sebaceous glands make sebum that empties onto the skin surface through the pore, which is an opening in the follicle. Keratinocytes, a type of skin cell, line the follicle.  Normally as the body sheds skin cells, the keratinocytes rise to the surface of the skin. When someone has acne, the hair, sebum, and keratinocytes stick together inside the pore. This prevents the keratinocytes from shedding and keeps the sebum from reaching the surface of the skin. The mixture of oil and cells allows bacteria that normally live on the skin to grow in the plugged follicles and cause inflammation—swelling, redness, heat, and pain. When the wall of the plugged follicle breaks down, it spills the bacteria, skin cells, and sebum into nearby skin, creating lesions or pimples
      </p>
      <br/>
      <p>
      For most people, acne tends to go away by the time they reach their thirties, but some people in their forties and fifties continue to have this skin problem.
      </p>
      <img src="https://assets.nhs.uk/nhsuk-cms/images/S_0917_acne_M1080444.max-600x600.jpg" alt="Acne" />
      <div className="section">
        <h2>Who Gets Acne?</h2>
        <p>People of all races and ages get acne, but it is most common in teens and young adults. When acne appears during the teenage years, it is more common in males. Acne can continue into adulthood, and when it does, it is more common in women.</p>
      </div>
      <div className="section">
        <h2>Types of Acne</h2>
        <p>Acne causes several types of lesions, or pimples. Doctors refer to enlarged or plugged hair follicles as comedones. Types of acne include:</p>
        <ul>
        <li>Whiteheads: Plugged hair follicles that stay beneath the skin and produce a white bump.</li>
        <li>Blackheads: Plugged follicles that reach the surface of the skin and open up. They look black on the skin surface because the air discolors the sebum, not because they are dirty.</li>
        <li>Papules: Inflamed lesions that usually appear as small, pink bumps on the skin and can be tender to the touch.</li>
        <li>Pustules or pimples: Papules topped by white or yellow pus-filled lesions that may be red at the base.</li>
        <li>Nodules: Large, painful solid lesions that are lodged deep within the skin.</li>
        <li>Severe nodular acne (sometimes called cystic acne): Deep, painful, pus-filled lesions.</li>
      </ul>
      </div>
      <div className="section">
        <h2>Causes of Acne</h2>
        <p>Doctors and researchers believe that one or more of the following can lead to the development of acne:</p>
        <ul>
            <li>Excess or high production of oil in the pore.</li>
            <li>Buildup of dead skin cells in the pore.</li>
            <li>Growth of bacteria in the pore.</li>
        </ul>
      </div>
      <div className="section">
        <h2>The following factors may increase your risk for developing acne:</h2>
        
        <ul>
            <li>Hormones. An increase in androgens, which are male sex hormones, may lead to acne. These increase in both boys and girls normally during puberty and cause the sebaceous glands to enlarge and make more sebum. Hormonal changes related to pregnancy can also cause acne. </li>
            <li>Family history. Researchers believe that you may be more likely to get acne if your parents had acne.</li>
            <li>Medications. Certain medications, such as medications that contain hormones, corticosteroids, and lithium, can cause acne.</li>
            <li>Age. People of all ages can get acne, but it is more common in teens.</li>
        </ul>
      </div>
      <div className="section">
        <h2>Treatment</h2>
        <p>Treatment options for acne include over-the-counter topical creams, prescription medications, oral antibiotics, and procedures such as laser therapy or chemical peels. It's important to consult a dermatologist to determine the best treatment plan for your specific condition.</p>
      </div>
      <button className="button"> <Link to="/diseases">Go Back to Diseases</Link> </button>
    </div>
    );
};

export default Acne;
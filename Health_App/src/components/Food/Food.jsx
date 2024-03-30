import React from 'react';
import "./Food.css"
import { Link } from 'react-router-dom';

const Food = () => {
    return (
        <div className="skin-health">
      <div className="title-section">
        <h1>How Food Affects Your Skin</h1>
      </div>
      <div className="img-section">
        <img src="https://asianbeautyessentials.com/cdn/shop/articles/Depositphotos_68224817_L_1200x.jpg?v=1668417069" alt="Healthy Skin" />
      </div>
      <div className="intro-section">
        <p>Feeling lackluster? Fatigued? Gazing at a reflection that reveals dull skin? It could be a sign that your diet needs a boost.</p>
        <p>Skincare isn't just about what you apply externally—it begins internally. When your diet lacks essential nutrients, your skin often bears the brunt. But fear not! There's a plethora of foods that can enhance your skin's radiance and complexion.</p>
        <p>Celebrities and idols are increasingly turning to these skin-friendly foods, and for good reason—they deliver results! So bid farewell to the days of squeezing lemons directly onto your face (seriously, don't do that), and say hello to a delicious array of foods that can help restore your skin's natural beauty.</p>
        <p>If you're ready to elevate your skincare routine, it all starts with what's on your plate. As the adage goes, "you are what you eat," highlighting the direct correlation between dietary choices and skin health.</p>
      </div>
      <div className="how-food-affects-section">
        <h2>How Food Affects Your Skin</h2>
        <p>Skin, being the body's largest organ, serves as a protective barrier against various environmental aggressors such as sunlight, pollution, and bacteria. Consequently, the foods you consume can significantly impact the appearance and overall condition of your skin.</p>
        <p>Certain food items contain inflammatory compounds that may exacerbate redness and swelling, while others high in sugar and simple carbohydrates can trigger insulin release and promote inflammation. Additionally, foods laden with toxins can cause damage to skin cells and contribute to the formation of wrinkles. Thus, it's evident that a poor diet can adversely affect skin health.</p>
        <p>Conversely, incorporating ample fruits and vegetables into your diet can enhance skin complexion. Moreover, maintaining adequate hydration by consuming plenty of water is vital for maintaining skin's suppleness and vitality.</p>
        <p>In essence, if you aspire to radiate a healthy complexion, making dietary adjustments can serve as a fundamental step towards achieving that goal.</p>
      </div>

      <div>
      <button className='text-4xl ml-11 mr-11 text-blue-400 bg-blue-100 border-solid border-8 border-blue-100 p-10'>
           <Link to="/goodFood">Good Food For Your Skin </Link>
           </button>
            
            <button className='text-4xl ml-11 mr-11 text-blue-400 bg-blue-100 border-solid border-8 border-blue-100 p-10'> <Link to="/badFood">Bad Food For Your Skin</Link>
            </button>
           </div>
      </div>
   
    );
};

export default Food;
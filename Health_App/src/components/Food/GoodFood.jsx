import React from 'react';
import "./GoodFood.css"
import { Link } from 'react-router-dom';

const GoodFood = () => {
    return (
        <div className="good-foods">
            <div className="title-section">
                <h1>Nourishing Foods for Glowing Skin</h1>
            </div>
            <div className="img-section">
        <img src="https://spamd.net/wp-content/uploads/2021/07/healthy-foods-for-better-skin-1200x480.jpg" alt="Healthy Skin" />
      </div>
            <div className="food-list">
                <ol>
                    <li>
                        <h2>Fatty Fish</h2>
                        <p>Salmon and tuna are rich in omega-3 fatty acids and amino acids, reducing inflammation, combating wrinkles, and regulating sebum production to alleviate acne.</p>
                    </li>
                    <li>
                        <h2>Avocado</h2>
                        <p>Loaded with antioxidants, essential fats, and vitamins C, A, and E, avocados moisturize dry skin, shield against sun damage, and aid in skin cancer prevention.</p>
                    </li>
                    <li>
                        <h2>Leafy Greens</h2>
                        <p>Packed with antioxidants like vitamins A, C, and E, leafy greens stimulate cell turnover, boost blood flow, and fight free radicals for youthful, radiant skin.</p>
                    </li>
                    <li>
                        <h2>Olive Oil</h2>
                        <p>With its oleic acid and monounsaturated fatty acids, olive oil maintains skin softness, soothes irritation, and shields against oxidative stress, thanks to its antioxidant-rich properties.</p>
                    </li>
                    <li>
                        <h2>Green Tea</h2>
                        <p>Rich in EGCG antioxidants, green tea scavenges free radicals, reduces inflammation, treats redness, and lowers the risk of skin cancer.</p>
                    </li>
                    <li>
                        <h2>Nuts</h2>
                        <p>A source of essential fatty acids, vitamin E, and selenium, nuts hydrate the skin, promote plumpness, and protect against sun damage and environmental pollutants.</p>
                    </li>
                    <li>
                        <h2>Water-Rich Fruits</h2>
                        <p>Cucumbers and watermelon, abundant in hydration, keep skin supple and radiant, preventing dryness, wrinkles, and acne.</p>
                    </li>
                    <li>
                        <h2>Non-Dairy Milk</h2>
                        <p>Almond or oat milk, rich in vitamins and fatty acids, protect against free radical damage and maintain skin hydration.</p>
                    </li>
                    <li>
                        <h2>Low-Glycemic Index Foods</h2>
                        <p>Opt for oatmeal, quinoa, chia seeds, and vegetables to stabilize blood sugar levels, reduce inflammation, and prevent breakouts.</p>
                    </li>
                    <li>
                        <h2>Sweet Potatoes</h2>
                        <p>A skin repair superfood, rich in beta-carotene, converts to Vitamin A, essential for skin renewal and protection against UV damage.</p>
                    </li>
                </ol>

            </div>

            
            <button className="button"> <Link to="/food">How Food Affects Your Skin</Link> </button>
      
            
        </div>
    );
};

export default GoodFood;
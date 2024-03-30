import React from 'react';
import "./BadFood.css"
import { Link } from 'react-router-dom';

const BadFood = () => {
    return (
        <div class="bad-foods">
        <div class="title-section">
          <h1>Taste good, but don’t do any good: What foods are bad for your skin?</h1>
        </div>
        <div className="img-section">
        <img src="https://www.precisionorthomd.com/wp-content/uploads/2023/10/percision-blog-header-junk-food-102323.jpg" alt="Healthy Skin" />
      </div>
        <div class="bad-foods-list">
          <ol>
            <li>
              <h2>Sugar</h2>
              <p>Let's face it: we all love sugar. It's sweet, it's delicious, and it gives us a quick energy boost when we need it. However, sugar is also one of the worst things you can eat if you're trying to maintain healthy skin.</p>
              <p>Eating a diet high in refined sugars can actually lead to a host of skin problems, including premature aging, inflammation, and breakouts. That's because refined sugars cause your insulin levels to spike, which in turn triggers inflammation throughout the body. And since your skin is your body's largest organ, it's particularly vulnerable to the damaging effects of sugar.</p>
              <p>On the other hand, another problem with refined sugar is it can cause glycation. This is when sugars bind to proteins in the body, causing the proteins to become stiff and inflexible. Collagen is one of the proteins that can be affected by glycation, and this is bad news for skin, as collagen helps to keep skin firm and elastic. When collagen becomes damaged, it leads to wrinkles, sagging skin, and a loss of radiance, which separates you from glowing skin.</p>
            </li>
            <li>
              <h2>Dairy</h2>
              <p>As anyone who's ever had a pimple can attest, dairy products and skin don't always mix.</p>
              <p>First of all, they contain hormones that can trigger acne breakouts. In addition, dairy products are often high in saturated fats, which can clog pores and lead to blackheads and other blemishes.</p>
              <p>Finally, milk and other dairy products contain lactose, which can be difficult for some people to digest. When the body doesn't properly digest lactose, it can cause inflammation, which can show up on the skin as redness, swelling, and even breakouts.</p>
            </li>
            <li>
              <h2>Greasy foods</h2>
              <p>There's nothing quite like a greasy hamburger or slice of pizza to ruin a perfect complexion.</p>
              <p>When we eat processed foods, our body releases excess sebum, or oil, which can clog pores and lead to breakouts. In addition, the fat in these foods can also deposit itself on our skin, leading to a dull, lifeless complexion.</p>
            </li>
            <li>
              <h2>High glycemic foods</h2>
              <p>Why are high glycemic foods so bad for the skin? Because they make you break out, duh!</p>
              <p>High glycemic foods can cause an increase in insulin levels, which can promote inflammation and an increase in sebum production. This can block pores and lead to breakouts. In addition, high glycemic foods can also trigger the release of inflammatory chemicals that can damage healthy skin cell function and lead to premature aging.</p>
            </li>
            <li>
              <h2>Alcohol</h2>
              <p>Put that margarita down, it could be causing you dry skin.</p>
              <p>Alcohol is a diuretic, which means that it causes your body to lose fluids. This can lead to dehydration, which dries out your skin and makes it more susceptible to wrinkles. It also increases inflammation, which can cause redness, swelling, and puffiness.</p>
              <p>And if that's not enough, drinking too much alcohol can also lead to rosacea, a condition that causes the blood vessels in your face to widen.</p>
            </li>
          </ol>
        </div>
        <button className="button"> <Link to="/food">How Food Affects Your Skin</Link> </button>
      </div>
      
    );
};

export default BadFood;
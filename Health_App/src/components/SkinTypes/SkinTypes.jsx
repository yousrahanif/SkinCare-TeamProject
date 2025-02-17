import React from 'react';
import './SkinTypes.css'

const SkinTypes = () => {
    return (
        <div >
            <h1 style={{fontSize: '50px'}} className='text-center text-6xl p-7 text-blue-400'>Little More About Your Skin</h1>
            <div className='ml-20 text-xl'>
                <h2 style={{fontSize: '30px', padding:'5px', color:'skyblue'}}>Normal Skin</h2>
                <p className='text'><strong  className='text-2xl' >How to Tell if You Have Normal Skin</strong></p>
                <p className='text2'>You don’t experience many breakouts. Your skin doesn’t tend to react negatively to new products or weather changes. You don’t feel like you need to constantly moisturize or blot oil from your face all day long. Your skin is firm, with minimal fine lines and wrinkles.</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>Lucky you! With normal skin, you experience almost no sensitivity, dryness or oiliness. Your skin can tolerate most ingredients, meaning you can play hard with beauty products and have tons of fun experimenting with cleansers, moisturizers and masks until you find exactly what works for you.</p>
                <br />
            </div>

            <div className='ml-20 text-xl'>
                <h2 style={{fontSize: '30px', padding:'5px', color:'skyblue'}}>Oily Skin</h2>
                <p className='text' ><strong className='text-2xl'>How to Tell if You Have Oily Skin</strong></p>
                <p className='text2'>Your skin always seems to be glowing. You’re likely no stranger to blotting sheets or mattifying powders. You might find that makeup and skin care products don’t always stay put like you’d want them to.</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>With oily skin, shine control is a top concern. Although there are benefits to having oily skin (like fewer wrinkles!), you should avoid ingredients like mineral oil, petrolatum and alcohol. Products labeled “non-comedogenic” work great for oily skin as these won’t clog up your pores. Oil-free moisturizers are your best friends (yes, you still need to moisturize!), as are chemical exfoliants and clay masks. Be sure not to over-wash your face, as drying out your pores can cause them to produce even more oil to compensate.</p>
                <br />
            </div>

            <div className='ml-20 text-xl'>
                <h2 style={{fontSize: '30px', padding:'5px', color:'skyblue'}}>Dry/Dehydrated Skin</h2>
                <p className='text'><strong className='text-2xl'>How to Tell if You Have Dry Skin</strong></p>
                <p className='text2'>Dryness and dehydration are actually two separate concerns, but they have very similar symptoms. Here’s how to identify them in your skin:</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>To care for dry skin, you’ll want to seal in moisture by applying a rich moisturizer several times each day—especially after washing your hands or bathing. Try to keep the air in your home warm and moist to help heal. Avoid using harsh soaps or products containing citrus oils or lots of fragrance.</p>
                <br />
            </div>

            <div className='ml-20 text-xl'>
                <h2 style={{fontSize: '30px', padding:'5px', color:'skyblue'}}>Combination Skin </h2>
                <p className='text'><strong className='text-2xl'>How to Tell if You Have Combination Skin</strong></p>
                <p className='text2'>If you’re having trouble figuring out what type of skin you have, it’s likely combination. Is your skin dry in certain areas, while oily in others? Combination skin is most easily defined by an oily T-zone (the strip across the forehead and the line down the nose) and dry or normal skin on the rest of the face.</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>You’ll want to stay away from the same ingredients as oily and dry skin, such as alcohol-based products. The name of the game with combination skin is balance. Isolate problem areas with spot treatments and use toners or balancing cream to even out the skin.</p>
                <br />
            </div>

            <div className='ml-20 text-xl'>
                <h2 style={{fontSize: '30px', padding:'5px', color:'skyblue'}}>Acne-Prone Skin</h2>
                <p className='text'><strong className='text-2xl'>How to Tell if You Have Acne-Prone Skin</strong></p>
                <p className='text2'>If you get frequent breakouts (or ones that just never seem to go away), you likely have acne-prone skin. This means that your pores tend to clog easily, making you more susceptible to whiteheads, blackheads or pustules than other skin types. You can have oily or dry skin and be prone to acne.</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>Use cleansers specifically formulated to treat acne, as well as exfoliants and moisturizers that will help minimize breakouts. Gently cleanse your face to avoid trauma to existing breakouts, and use topical gel to treat and lighten acne scarring. Look for acne-fighting ingredients like salicylic acid, clay, benzoyl peroxide or retinol.</p>
            <br />
            </div>

            <div className='ml-20 text-xl'>
                <h2  style={{fontSize: '30px', padding:'5px', color:'skyblue'}} >Sensitive Skin</h2>
                <p className='text'><strong className='text-2xl'>How to Tell if You Have Sensitive Skin</strong></p>
                <p className='text2'>Sensitive skin might be caused by genetics, allergies or environmental factors. Signs of this skin type include:</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>You need to be careful when choosing cosmetics, as you’re more prone to irritation, redness, stinging, burning or acne breakouts. Avoid fragrances and irritants like alcohol or antibacterial ingredients. Look for products with fewer additives, and seek out those with calming, healing or anti-inflammatory properties. Sometimes, using the wrong products can cause your skin to become sensitized, even if your skin type isn’t truly sensitive.</p>
                <br />
            </div>

            <div className='ml-20 text-xl'>
                <h2 style={{fontSize: '30px', padding:'5px', color:'skyblue'}}>Mature Skin</h2>
                <p className='text'><strong className='text-2xl'>How to Tell if You Have Mature Skin</strong></p>
                <p className='text2'> While not everyone’s skin ages at the same pace, the signs are fairly universal. You might notice a wrinkle here and there or more dryness than in your younger years. For more mature skin, you may notice sagging, dark spots, dullness and dehydration.</p>
                <p className='text'><strong className='text-2xl'>Skin Care Tips</strong></p>
                <p className='text2'>Mature skin requires enhanced skin care to tackle past and future damage. There’s no wrong time to create an anti-aging routine with restorative treatments, which can boost collagen, as well as protect against environmental aggressors and cell turnover.</p>
            </div>
        </div>
    );
};

export default SkinTypes;

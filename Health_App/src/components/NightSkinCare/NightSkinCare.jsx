import React from 'react';
import { Link } from 'react-router-dom';
import "./NightSkinCare.css"

const NightSkinCare = () => {
    return (
        <div>
            <div className='ml-20 text-xl'>
                <h2 className='text-4xl text-center p-8 text-blue-400'>Your Night time Skin Care Order</h2>
                <p className='text-3xl ml-5'>To make sure you wake up with a fresh-faced complexion, use a slightly different routine before you hit the hay. </p>
                <div className='mt-5 p-5 mb-5'>
                <h3 className='text2'><strong>Step 1: Double Cleanse</strong></h3>
                <p className='text2'>Here's where it really pays to vary your routine from morning to night. Double cleansing ensures you're removing all the impurities from your skin. For maximum benefit, be sure to select products formulated for your skin type.  </p>
                <ul >
                    <li className='text2'>
                   <strong> Why you need it: </strong> Double cleansing starts with an oil-based cleanser, which is most effective for removing oil-based products like makeup and sunscreen, and ends with a water-based cleanser, which better targets sweat and bacteria.
                    </li>
                    <li className='text2'>
                    <strong>How to use it:</strong> Gently massage the oil-based cleanser into your skin for about 60 seconds, then rinse with lukewarm water. While skin is still damp, repeat the process with your water-based cleanser. Gently pat skin dry. 
                    </li>
                </ul>
                </div>


                <div className='mt-5 p-5 mb-5'>
                <h3 className='text2'><strong>Step 2: Toner</strong></h3>
                <p className='text2'>Whether you need to hydrate dry skin, combat oil or soothe sensitive skin, the right toner makes all the difference. </p>
                <ul >
                    <li className='text2'>
                   <strong> Why you need it: </strong> A toner helps replenish your skin after cleansing while prepping it for the rest of your routine.
                    </li>
                    <li className='text2'>
                    <strong>How to use it:</strong> Apply your toner to a cotton pad, then sweep the pad outwards from the center of your face. Or you might prefer a gentle mist formula that goes on with a quick spritz. Either way, allow the toner to dry before moving on to the next step. . 
                    </li>
                </ul>
                </div>


                <div className='mt-5 p-5 mb-5'>
                <h3 className='text2'><strong>Step 3: Serum</strong></h3>
                <p className='text2'>A nighttime serum gives your skin some extra TLC while you sleep. Choose one with AHAs or BHAs, hyaluronic acid, antioxidants or peptides. 

</p>
                <ul >
                    <li className='text2'>
                   <strong> Why you need it: </strong>  A serum can boost your skin's ability to repair itself at night.

                    </li>
                    <li className='text2'>
                    <strong>How to use it:</strong>Gently pat the serum into your face from the center outwards. 
                    </li>
                </ul>
                </div>


                <div className='mt-5 p-5 mb-5'>
                <h3 className='text2'><strong>Step 4: Moisturizer</strong></h3>
                <p className='text2'>Repeat the method you use in the morning. Depending on your skin type, you can use the same product morning and night, or you may choose one that contains SPF in the morning and a creamier, more hydrating product at night. </p>
                <ul >
                    <li className='text2'>
                   <strong> Why you need it: </strong> The right moisturizer can help prevent both dryness and extreme oiliness.
                    </li>
                    <li className='text2'>
                    <strong>How to use it:</strong> Gently massage your moisturizer into slightly damp skin. A pea-sized amount is generally enough for your entire face. 
                    </li>
                </ul>
                </div>


                <div className='mt-5 p-5 mb-5'>
                <h3 className='text2'><strong>Step 5: Eye Cream</strong></h3>
                <p className='text2'>Repeat the method you use in the morning. The same eye cream can work for both day and night, or you can select one with SPF for mornings and a heavier, more hydrating eye cream for the evening.   </p>
                <ul >
                    <li className='text2'>
                   <strong> Why you need it: </strong> Eye cream helps treat the appearance and development of wrinkles and is formulated specifically for this delicate facial tissue.
                    </li>
                    <li className='text2'>
                    <strong>How to use it:</strong> Apply your eye cream in very small dots near the inner corner of your eye and smooth it outwards. Follow the orbital bones that surround your eye, including the area just under your eyebrow, gently patting it into your skin with your ring finger. 
                    </li>
                </ul>
                </div>


                


                <div className='mt-5 p-5 mb-5'>
                <h3 className='text2'><strong>Step 6: Retinol</strong></h3>
                <p className='text2'>Retinol is available in several forms, like oils and serums, and is often mixed with a cream moisturizer to reduce irritation. (Depending on the form you choose, it may come earlier in your routine.) Retinol causes sensitivity to the sun's UV rays, so it's best used at night.  </p>
                <ul >
                    <li className='text2'>
                   <strong> Why you need it: </strong> Because retinol speeds the rate at which skin regenerates, it can improve your skin's texture. For aging skin, it can reduce fine lines and lighten dark spots. It also improves oily or acne-prone skin by reducing oiliness, unclogging pores and removing dead skin cells.
                    </li>
                    <li className='text2'>
                    <strong>How to use it:</strong> To start, do this step just once or twice a week. Once your skin adjusts, you can use it more often. Even though you're using it at night, be sure to apply sunscreen each morning, as your skin will likely be extra sensitive. 
                    </li>

                    <li className='text2'>
                    <strong>Important</strong> Retinol isn't right for all skin types—make sure you do some research to determine if it's appropriate for you. Exercise caution if you have sensitive skin, and avoid it altogether if you're pregnant. 
                    </li>
                </ul>
                </div>


            </div>
            <button className="button"> <Link to="/skinCareRoutin">Your Skin Care Routine </Link> </button>
        </div>
            
       
        
    );
};

export default NightSkinCare;
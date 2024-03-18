import React from 'react';
import './SkinCare.css'
import { Link } from 'react-router-dom';

const SkinCare = () => {
    return (
        <div className=''>
            <h2 className='text-4xl text-blue-400 p-3 text-center mt-8'>Does the Sequence of Your Skincare Routine Truly Make a Difference?</h2>
            <p className='text-3xl ml-10 mt-8'>

The meticulous arrangement of your skincare routine is instrumental in optimizing the effectiveness of each product. Whether it's your morning or evening regimen, adhering to a consistent sequence involves a deliberate application of products from lighter to denser textures after cleansing. Starting with lighter formulations enhances absorption, allowing the skin to efficiently take in essential nutrients and active ingredients. This method ensures that each layer complements the one before, fostering a harmonious synergy for maximum skincare benefits. Emphasizing consistency in the application order promotes a well-balanced absorption rate, preventing potential conflicts between products. In essence, the order of your skincare routine goes beyond habit; it represents a thoughtful strategy aimed at improving the overall health and appearance of your skin.


            </p>
            <div className='container-center'>
           <button className='text-4xl ml-11 mr-11 text-blue-400 bg-blue-100 border-solid border-8 border-blue-100 p-10'>
           <Link to="/morningCare">Morning Skin Care </Link>
           </button>
            
            <button className='text-4xl ml-11 mr-11 text-blue-400 bg-blue-100 border-solid border-8 border-blue-100 p-10'> <Link to="/nightCare">Night Skin Care </Link>
            </button>
           </div>
        </div>
    );
};

export default SkinCare;
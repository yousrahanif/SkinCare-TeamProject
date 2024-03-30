import React from 'react';
import { Link } from 'react-router-dom';

const Diseases = () => {
    return (
        <div>
             <h1 style={{fontSize: '50px'}} className='text-center text-6xl p-7 text-blue-400'>Skin Diseases</h1>
            <div className='ml-20 text-xl'>
                
                <p className='text'><strong  className='text-2xl text-center text-blue-400'>The top five skin diseases worldwide, in terms of prevalence and impact</strong></p>
                <p className='text2'>
                    
                    <Link to="/acne"><span><strong className='text-2xl underline'>Acne </strong> </span>: </Link> Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells, leading to pimples, blackheads, and whiteheads. It can affect people of all ages but is most common during adolescence.
                </p>
                <p className='text2'>
                    
                    <Link to="/eczema"><span><strong className='text-2xl underline'>Eczema </strong> </span>: </Link>Eczema is a chronic inflammatory skin condition characterized by dry, itchy, and inflamed skin. It often appears as red, scaly patches on the skin and can be triggered by factors such as allergens, irritants, and stress.
                </p>
                <p className='text2'>
                    
                    <Link to="/psoriasis"><span><strong className='text-2xl underline'>Psoriasis </strong> </span>: </Link>Psoriasis is a chronic autoimmune disease that causes the rapid buildup of skin cells, resulting in thick, red patches covered with silvery scales. It can occur anywhere on the body and may be associated with joint pain and inflammation in some cases.
                </p>
                <p className='text2'>
                    
                    <Link to="/cancer"><span><strong className='text-2xl underline'>Skin Cancer </strong> </span>: </Link>Skin cancer, including melanoma, basal cell carcinoma, and squamous cell carcinoma, is caused by the uncontrolled growth of abnormal skin cells. It is often associated with sun exposure and can appear as new moles or changes in existing moles, as well as other skin abnormalities.
                </p>
                <p className='text2'>
                    
                    <Link to="/rosacea"><span><strong className='text-2xl underline'>Rosacea </strong> </span>: </Link>Rosacea is a chronic inflammatory skin condition that primarily affects the face, causing redness, flushing, visible blood vessels, and in some cases, bumps and pimples. Triggers for rosacea may include sun exposure, spicy foods, alcohol, and stress.</p>

                    <p className='text2 text-blue-400'>
                    These skin diseases can have a significant impact on a person's quality of life and may require medical treatment and management by dermatologists or healthcare professionals. Early diagnosis and appropriate management are essential for effectively managing these conditions and minimizing their impact on overall health and well-being.
                    
                    </p>
            </div>
            
        </div>
    );
};

export default Diseases;
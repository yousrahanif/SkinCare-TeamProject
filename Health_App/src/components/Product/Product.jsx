
import './Product.css';

const Product = ({ name, image, skinTypes }) => {
    return (
      
        <div className='product'>
           
            <h2>Name: {name}</h2>
            <img src={image} alt={name} />
            <div>Skin Types: {skinTypes}</div>
        </div>
    );
};

export default Product;







// // // Product.jsx
// // import './Product.css';

// // const Product = ({ name, image }) => {
// //     return (
// //         <div className='product'>
// //             <h2>Name: {name}</h2>
// //             <img src={image} alt="" />
// //         </div>
// //     );
// // };

// // export default Product;

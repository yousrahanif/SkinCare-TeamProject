
import { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState({ cleansers: [], moisturizers: [], sunscreens: [] });

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                const cleansers = data.entry.filter(entry => entry.resource.code.coding[0].code === "cleanser");
                const moisturizers = data.entry.filter(entry => entry.resource.code.coding[0].code === "moisturizer");
                const sunscreens = data.entry.filter(entry => entry.resource.code.coding[0].code === "sunscreen");
                setProducts({ cleansers, moisturizers, sunscreens });
            });
    }, []);

    return (
        <div>
            <h2 className='text-center'>Skincare Products</h2>
            <div className='products-container'>
                <CategoryProducts category="Cleansers" products={products.cleansers} />
                <CategoryProducts category="Moisturizers" products={products.moisturizers} />
                <CategoryProducts category="Sunscreens" products={products.sunscreens} />
            </div>
        </div>
    );
};

const CategoryProducts = ({ category, products }) => {
    return (
        <div>
            {products.map(product => (
                <Product
                    key={product.resource.id}
                    name={product.resource.code.text}
                    image={product.resource.code.image}
                    skinTypes={product.resource.extension.find(ext => ext.url === "http://example.com/skincare#skinTypes").valueCodeableConcept[0].text}
                />
            ))}
        </div>
    );
};

export default Products;




// // Products.jsx
// import { useEffect, useState } from 'react';
// import './Products.css';
// import Product from '../Product/Product';

// const Products = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('/products.json') // Fetch products from products.json
//             .then(res => res.json())
//             .then(data => setProducts(data.entry.map(entry => entry.resource)));
//     }, []);

//     return (
//         <div>
//             <h2>Skincare Products: {products.length}</h2>
//             <div className='products-container'>
//                 {products.map(product => (
//                     <Product
//                         key={product.id}
//                         name={product.code.text}
//                         image={product.code.image}
//                         skinTypes={product.extension.find(ext => ext.url === "http://example.com/skincare#skinTypes").valueCodeableConcept[0].text}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;








// // // Products.jsx
// // import  { useEffect, useState } from 'react';

// // import './Products.css';
// // import Product from '../Product/Product';

// // const Products = () => {
// //     const [products, setProducts] = useState([]);

// //     useEffect(() => {
// //         fetch('https://restcountries.com/v3.1/all')
// //             .then(res => res.json())
// //             .then(data => setProducts(data));
// //     }, []);

// //     return (
// //         <div>
// //             <h2>Hello Mello Yello Gello from Countries: {products.length}</h2>
// //             <div className='products-container'>
// //                 {products.map(product => (
// //                     <Product
// //                         key={product.cca3}
// //                         name={product.name.common}
// //                         image={product.flags.png}
// //                     />
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default Products;

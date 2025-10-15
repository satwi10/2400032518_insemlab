import React, { useState } from 'react';
// Make sure this path is correct for your image
import hoodieImage from './assets/tshirt.png'; 

const products = [
  {
    id: 1,
    name: 'KL-branded Hoodie',
    price: '$45.00',
    shortDescription: 'Comfortable and stylish university hoodie.',
    extendedDescription: 'A premium quality hoodie featuring the KL University logo. Made from 80% cotton and 20% polyester.',
    image: hoodieImage // Using the local image
  },
  {
    id: 2,
    name: 'University Backpack',
    price: '$35.50',
    shortDescription: 'Durable backpack for all your needs.',
    extendedDescription: 'This spacious backpack has multiple compartments for your laptop, books, and essentials.',
    image: 'https://via.placeholder.com/400x300.png?text=KL+Backpack'
  },
  {
    id: 3,
    name: 'Stainless Steel Water Bottle',
    price: '$15.00',
    shortDescription: 'Keep your drinks cold or hot.',
    extendedDescription: 'A 500ml stainless steel water bottle. Keeps beverages hot for 12 hours or cold for 24 hours.',
    image: 'https://via.placeholder.com/400x300.png?text=KL+Bottle'
  }
];

const styles = `
  body { background-color: #282c34; color: white; } /* Added dark theme */
  .product-page { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
  .product-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-top: 20px; }
  
  .product-item { 
    border: 1px solid #ddd; 
    border-radius: 8px; 
    padding: 15px; 
    cursor: pointer; 
    background-color: #fff; 
    transition: box-shadow 0.3s; 
    text-align: left;
    color: #333; /* <-- THIS IS THE FIX */
  }

  .product-item:hover { box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
  .popup-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); display: flex; justify-content: center; align-items: center; }
  .popup-content { background: white; padding: 30px; border-radius: 10px; position: relative; width: 90%; max-width: 500px; color: #333; }
  .popup-close-btn { position: absolute; top: 10px; right: 15px; background: none; border: none; font-size: 2rem; cursor: pointer; color: #333; }
  .popup-img { width: 100%; height: auto; border-radius: 5px; margin-bottom: 15px; }
`;

function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // The rest of the component remains the same
  return (
    <div className="product-page">
      <style>{styles}</style>
      <h1>KL University Online Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item" onClick={() => setSelectedProduct(product)}>
            {/* The content below should now be visible */}
            <img src={product.image} alt={product.name} style={{width: '100%', borderRadius: '5px'}}/>
            <h2>{product.name}</h2>
            <p><b>{product.price}</b></p>
            <p>{product.shortDescription}</p>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={() => setSelectedProduct(null)}>&times;</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="popup-img" />
            <h2>{selectedProduct.name}</h2>
            <p><b>{selectedProduct.price}</b></p>
            <p>{selectedProduct.extendedDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
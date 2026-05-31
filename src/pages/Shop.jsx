import React, { useState } from 'react';

// product database array
const PRODUCTS = [
  {
    id: 1,
    name: 'iPhone 17 Pro Max',
    price: 1199,
    category: 'Smartphones',
    image: '/assets/Images/iphone 17.png',
  },
  {
    id: 2,
    name: 'PlayStation 5 Pro',
    price: 699,
    category: 'Consoles',
    image: '/assets/Images/ps5 image.jpg',
  },
  {
    id: 3,
    name: 'Lenovo Legion Pro 7i',
    price: 2199,
    category: 'Laptops',
    image: '/assets/Images/lenovo legion.jpg',
  },
  {
    id: 4,
    name: 'Samsung Galaxy S26 Ultra',
    price: 1299,
    category: 'Smartphones',
    image: '/assets/Images/flagship.png',
  },
];

function Shop({ addToCart }) {
  const [maxPrice, setMaxPrice] = useState(2500);

  const filteredProducts = PRODUCTS.filter((product) => {
    return product.price <= maxPrice;
  });

  return (
    <main style={{ padding: '40px 20px', minHeight: '80vh' }}>
      <section className="shop-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="main-title" style={{ fontSize: '2.5rem' }}>Our Premium Inventory</h1>
        <p style={{ color: '#aaa', marginTop: '10px' }}>
          Equip yourself with next-gen performance hardware.
        </p>
      </section>

      {/* Price Filter */}
      <div
        className="price-filter"
        style={{
          maxWidth: '350px',
          margin: '0 auto 40px auto',
          padding: '20px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}
      >
        <label
          htmlFor="priceRange"
          style={{
            display: 'block',
            marginBottom: '15px',
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
          Max Price: ${maxPrice}
        </label>

        <input
          type="range"
          id="priceRange"
          min="0"
          max="2500"
          step="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          style={{ width: '100%', cursor: 'pointer' }}
        />
      </div>

      {/* Dynamic Products Grid */}
      <div
        className="products-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="category-box"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '15px',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="category-img"
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            <span
              style={{
                fontSize: '0.8rem',
                color: '#00ffcc',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {product.category}
            </span>

            <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.2rem', textAlign: 'center' }}>
              {product.name}
            </h3>

            <p style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.3rem', marginBottom: '15px' }}>
              ${product.price}
            </p>

            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => {addToCart(product);
              alert(`${product.name} added to cart!`);
}}
            >
              Add to Cart 🛒
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Shop;

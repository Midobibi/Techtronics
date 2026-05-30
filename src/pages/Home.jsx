import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h1 className="main-title">The Future of Tech, Delivered</h1>
          <p className="subtitle">
            Welcome to Techtronics. Your ultimate stop for high-performance computing, 
            next-gen gaming consoles, and flagship smartphones. Engineered for excellence.
          </p>
          <div className="intro-buttons">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/contact" className="btn btn-secondary">Pre-Order</Link>
          </div>
        </div>
      </section>

      {/* Hero Banner Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <img src="/assets/Images/flagship.png" alt="Latest Flagship Smartphone" className="main-hero-img" />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="category-container">
        <h2 className="categories-title">Our Categories</h2>
        <div className="categories-grid" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          <div className="category-box">
            <img src="/assets/Images/iphone 17.png" alt="Smartphones" className="category-img" />
            <h3>Smartphones</h3>
            <Link to="/shop" className="btn btn-primary">Browse Mobile</Link>
          </div>

          <div className="category-box">
            <img src="/assets/Images/ps5 image.jpg" alt="Consoles" className="category-img" />
            <h3>Consoles</h3>
            <Link to="/shop" className="btn btn-primary">Browse Gaming</Link>
          </div>

          <div className="category-box">
            <img src="/assets/Images/lenovo legion.jpg" alt="Laptops" className="category-img" />
            <h3>Laptops</h3>
            <Link to="/shop" className="btn btn-primary">Browse Computers</Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;
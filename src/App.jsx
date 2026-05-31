import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Router>
      <div className="app-container">
        <Navbar cart={cart} cartTotal={cartTotal} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

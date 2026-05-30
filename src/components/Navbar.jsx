import { Link } from 'react-router-dom'; 
function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/Images/9 (1).png" alt="Techtronics Logo" className="logo-img" />
          <span className="logo-text">TECH<span>TRONICS</span></span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About Us</Link></li> 
          <li className="cart-dropdown-wrapper">
            <a href="#" className="cart-icon-link">🛒</a>
            <div className="cart-dropdown">
              <p className="empty-cart-msg">No items added</p>
              <hr />
              <div className="cart-footer">
                <span>Total: $0</span>
                <button className="btn-mini">View Cart</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
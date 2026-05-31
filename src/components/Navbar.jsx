import { Link } from 'react-router-dom';

function Navbar({ cart, cartTotal }) {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="/assets/Images/9 (1).png" alt="Techtronics Logo" className="logo-img" />
          <span className="logo-text">
            TECH<span>TRONICS</span>
          </span>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About Us</Link></li>

          <li className="cart-dropdown-wrapper">
            <button type="button" className="cart-icon-link">
              🛒 ({cart.length})
            </button>

            <div className="cart-dropdown">
              {cart.length === 0 ? (
                <p className="empty-cart-msg">No items added</p>
              ) : (
                cart.map((item, index) => (
                  <p key={`${item.id}-${index}`} className="empty-cart-msg">
                    {item.name} - ${item.price}
                  </p>
                ))
              )}

              <hr />

              <div className="cart-footer">
                <span>Total: ${cartTotal}</span>
                <button type="button" className="btn-mini">View Cart</button>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

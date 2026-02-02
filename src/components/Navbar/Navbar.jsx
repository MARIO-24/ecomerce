import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ cartCount = 0, currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page)
    }
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button 
          className="navbar-logo"
          onClick={() => handleNavClick('home')}
        >
          <span className="logo-icon">🛍️</span>
          <span>TiendaPlus</span>
        </button>
        
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <button 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${currentPage === 'products' ? 'active' : ''}`}
              onClick={() => handleNavClick('products')}
            >
              Productos
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              Acerca de
            </button>
          </li>
          <li>
            <button 
              className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contacto
            </button>
          </li>
        </ul>

        <div className="navbar-cart">
          <button 
            className="cart-btn"
            onClick={() => handleNavClick('cart')}
          >
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

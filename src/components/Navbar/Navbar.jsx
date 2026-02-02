import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ cartCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="logo-icon">🛍️</span>
          <span>TiendaPlus</span>
        </div>
        
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Inicio</a></li>
          <li><a href="#products" onClick={() => setIsOpen(false)}>Productos</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>Acerca de</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contacto</a></li>
        </ul>

        <div className="navbar-cart">
          <button className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

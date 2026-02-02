import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-menu">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#products">Productos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  )
}

import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Bienvenido a TiendaPlus</h1>
          <p>Descubre nuestros productos de calidad a los mejores precios</p>
          <button className="header-cta">Explorar Productos</button>
        </div>
        <div className="header-image">
          <div className="header-graphic">🏪</div>
        </div>
      </div>
    </header>
  )
}

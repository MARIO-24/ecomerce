import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Sobre TiendaPlus</h4>
          <ul>
            <li><a href="#about">Acerca de</a></li>
            <li><a href="#careers">Carreras</a></li>
            <li><a href="#press">Prensa</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Servicio al Cliente</h4>
          <ul>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Soporte</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Políticas</h4>
          <ul>
            <li><a href="#privacy">Privacidad</a></li>
            <li><a href="#terms">Términos</a></li>
            <li><a href="#returns">Devoluciones</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-links">
            <a href="#facebook" className="social-icon">f</a>
            <a href="#twitter" className="social-icon">𝕏</a>
            <a href="#instagram" className="social-icon">📷</a>
            <a href="#linkedin" className="social-icon">in</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} TiendaPlus. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ por tu equipo de desarrollo</p>
      </div>
    </footer>
  )
}

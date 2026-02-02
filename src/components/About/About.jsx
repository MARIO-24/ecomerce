import './About.css'

export default function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>Acerca de TiendaPlus</h1>
        <p>Tu tienda online de confianza desde 2020</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>📖 Nuestra Historia</h2>
          <p>
            TiendaPlus nació en 2020 con una misión simple: hacer que los mejores productos 
            de tecnología estén disponibles para todos, con precios competitivos y excelente 
            servicio al cliente.
          </p>
          <p>
            Comenzamos como una pequeña tienda en línea y hoy contamos con miles de clientes 
            satisfechos en toda la región. Nuestro crecimiento es el resultado del compromiso 
            con la calidad y la satisfacción de nuestros clientes.
          </p>
        </section>

        <section className="about-section">
          <h2>🎯 Nuestra Misión</h2>
          <p>
            Proporcionar a nuestros clientes acceso fácil a productos de tecnología de alta 
            calidad, con precios justos, entrega rápida y un servicio al cliente excepcional.
          </p>
        </section>

        <section className="about-section">
          <h2>🌟 Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Calidad</h3>
              <p>Solo ofrecemos productos de marcas confiables y garantía</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Confianza</h3>
              <p>Transparencia total en precios y políticas de devolución</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovación</h3>
              <p>Siempre buscamos mejorar nuestros servicios y tecnología</p>
            </div>
            <div className="value-card">
              <div className="value-icon">😊</div>
              <h3>Satisfacción</h3>
              <p>Tu felicidad es nuestro éxito</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>📊 Números Que Hablan</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>50,000+</h3>
              <p>Clientes satisfechos</p>
            </div>
            <div className="stat-card">
              <h3>12,000+</h3>
              <p>Productos disponibles</p>
            </div>
            <div className="stat-card">
              <h3>48 hrs</h3>
              <p>Envío promedio</p>
            </div>
            <div className="stat-card">
              <h3>4.8⭐</h3>
              <p>Calificación promedio</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>👥 Nuestro Equipo</h2>
          <p>
            Contamos con un equipo de profesionales dedicados a brindarte la mejor 
            experiencia de compra. Desde nuestro equipo de logística hasta nuestro 
            servicio al cliente, todos estamos comprometidos con tu satisfacción.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h4>Carlos Rodríguez</h4>
              <p>CEO & Fundador</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h4>María García</h4>
              <p>Directora de Operaciones</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h4>Juan López</h4>
              <p>Jefe de Tecnología</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h4>Ana Martínez</h4>
              <p>Gerente de Servicio al Cliente</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>💚 Compromiso con la Sostenibilidad</h2>
          <p>
            En TiendaPlus nos preocupamos por el ambiente. Utilizamos empaque reciclable, 
            optimizamos nuestras rutas de envío para reducir emisiones y apoyamos programas 
            de reciclaje de electrónica.
          </p>
        </section>

        <section className="about-section cta-section">
          <h2>¿Listo para unirte a TiendaPlus?</h2>
          <p>Descubre por qué somos la opción favorita de miles de clientes</p>
          <button className="cta-button">Explorar Catálogo</button>
        </section>
      </div>
    </div>
  )
}

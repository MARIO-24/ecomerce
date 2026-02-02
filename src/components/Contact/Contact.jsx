import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact">
      <div className="contact-hero">
        <h1>Contacto</h1>
        <p>¿Preguntas? Nos encantaría escucharte</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Dirección</h3>
            <p>
              Calle Principal 123<br />
              Ciudad, Estado 12345<br />
              País
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <h3>Teléfono</h3>
            <p>
              <a href="tel:+1234567890">+1 (234) 567-890</a><br />
              <a href="tel:+0987654321">+0 (987) 654-321</a><br />
              Lunes a Viernes: 9AM - 6PM
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>
              <a href="mailto:info@tiendaplus.com">info@tiendaplus.com</a><br />
              <a href="mailto:soporte@tiendaplus.com">soporte@tiendaplus.com</a><br />
              Respuesta en 24 horas
            </p>
          </div>

          <div className="info-card">
            <div className="info-icon">💬</div>
            <h3>Chat en Vivo</h3>
            <p>
              Disponible 24/7<br />
              Chat con nuestro equipo<br />
              Respuesta instantánea
            </p>
          </div>

          <h2>Redes Sociales</h2>
          <div className="social-links">
            <a href="#facebook" className="social-btn facebook">
              <span>f</span> Facebook
            </a>
            <a href="#twitter" className="social-btn twitter">
              <span>𝕏</span> Twitter
            </a>
            <a href="#instagram" className="social-btn instagram">
              <span>📷</span> Instagram
            </a>
            <a href="#linkedin" className="social-btn linkedin">
              <span>in</span> LinkedIn
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Envíanos un Mensaje</h2>
          
          {submitted && (
            <div className="success-message">
              <span className="success-icon">✓</span>
              <h3>¡Mensaje enviado!</h3>
              <p>Gracias por contactarnos. Nos comunicaremos pronto.</p>
            </div>
          )}

          <form className={`contact-form ${submitted ? 'submitted' : ''}`} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (234) 567-890"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona un asunto</option>
                <option value="pedido">Pregunta sobre un pedido</option>
                <option value="producto">Pregunta sobre un producto</option>
                <option value="devolucion">Devolución o reembolso</option>
                <option value="problema">Reporte de problema</option>
                <option value="sugerencia">Sugerencia o feedback</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>

      <div className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>¿Cuál es el tiempo de envío?</h3>
            <p>Normalmente 1-2 días hábiles en ciudades principales y 3-5 días en otras zonas.</p>
          </div>
          <div className="faq-card">
            <h3>¿Puedo devolver productos?</h3>
            <p>Sí, tenemos una política de devoluciones de 30 días sin hacer preguntas.</p>
          </div>
          <div className="faq-card">
            <h3>¿Aceptan tarjetas de crédito?</h3>
            <p>Sí, aceptamos todas las tarjetas de crédito principales y múltiples métodos de pago.</p>
          </div>
          <div className="faq-card">
            <h3>¿Hay envío gratis?</h3>
            <p>Sí, envío gratis en compras mayores a $50 en ciudad y mayores a $100 en otras zonas.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import './Home.css'
import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const PRODUCTS = [
  {
    id: 1,
    name: 'Laptop Premium',
    description: 'Laptop de alta performance',
    price: 1299,
    oldPrice: 1599,
    emoji: '💻',
    discount: 19,
    reviews: 145
  },
  {
    id: 2,
    name: 'Auriculares Inalámbricos',
    description: 'Sonido de calidad studio',
    price: 199,
    oldPrice: 299,
    emoji: '🎧',
    discount: 33,
    reviews: 89
  },
  {
    id: 3,
    name: 'Smartphone 5G',
    description: 'Última generación',
    price: 899,
    emoji: '📱',
    discount: 0,
    reviews: 234
  },
  {
    id: 4,
    name: 'Tablet Ultra',
    description: 'Pantalla OLED 12"',
    price: 599,
    oldPrice: 799,
    emoji: '📱',
    discount: 25,
    reviews: 112
  },
  {
    id: 5,
    name: 'Cámara Digital',
    description: '48MP con zoom óptico',
    price: 749,
    emoji: '📷',
    discount: 0,
    reviews: 76
  },
  {
    id: 6,
    name: 'Reloj Inteligente',
    description: 'Monitor de salud completo',
    price: 349,
    oldPrice: 449,
    emoji: '⌚',
    discount: 22,
    reviews: 201
  },
  {
    id: 7,
    name: 'Powerbank 30000mAh',
    description: 'Carga rápida USB-C',
    price: 59,
    emoji: '🔋',
    discount: 0,
    reviews: 523
  },
  {
    id: 8,
    name: 'Monitor 4K',
    description: 'Pantalla IPS 27"',
    price: 399,
    oldPrice: 499,
    emoji: '🖥️',
    discount: 20,
    reviews: 98
  }
]

export default function Home({ onAddToCart }) {
  const [cartCount, setCartCount] = useState(0)
  const [notification, setNotification] = useState('')

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product)
    }
    setCartCount(prev => prev + 1)
    setNotification(`${product.name} agregado al carrito`)
    setTimeout(() => setNotification(''), 2000)
  }

  return (
    <div className="home">
      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      <section className="featured-section">
        <div className="section-header">
          <h2>🔥 Productos Destacados</h2>
          <p>Las mejores ofertas de hoy</p>
        </div>
        
        <div className="products-grid">
          {PRODUCTS.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>

      <section className="benefits-section">
        <h2>¿Por qué elegir TiendaPlus?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🚚</div>
            <h3>Envío Gratis</h3>
            <p>En compras mayores a $50</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💳</div>
            <h3>Pago Seguro</h3>
            <p>Múltiples formas de pago</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">↩️</div>
            <h3>Devoluciones Fáciles</h3>
            <p>30 días de garantía</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">💬</div>
            <h3>Soporte 24/7</h3>
            <p>Atención al cliente</p>
          </div>
        </div>
      </section>
    </div>
  )
}

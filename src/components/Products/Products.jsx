import './Products.css'
import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

const ALL_PRODUCTS = [
  {
    id: 1,
    name: 'Laptop Premium',
    description: 'Laptop de alta performance para trabajo profesional',
    price: 1299,
    oldPrice: 1599,
    emoji: '💻',
    discount: 19,
    reviews: 145,
    category: 'electrónica'
  },
  {
    id: 2,
    name: 'Auriculares Inalámbricos',
    description: 'Sonido de calidad studio con noise cancelling',
    price: 199,
    oldPrice: 299,
    emoji: '🎧',
    discount: 33,
    reviews: 89,
    category: 'audio'
  },
  {
    id: 3,
    name: 'Smartphone 5G',
    description: 'Última generación con cámara 108MP',
    price: 899,
    emoji: '📱',
    discount: 0,
    reviews: 234,
    category: 'móvil'
  },
  {
    id: 4,
    name: 'Tablet Ultra',
    description: 'Pantalla OLED 12" con stylus incluido',
    price: 599,
    oldPrice: 799,
    emoji: '📱',
    discount: 25,
    reviews: 112,
    category: 'tablets'
  },
  {
    id: 5,
    name: 'Cámara Digital',
    description: '48MP con zoom óptico 5x',
    price: 749,
    emoji: '📷',
    discount: 0,
    reviews: 76,
    category: 'cámaras'
  },
  {
    id: 6,
    name: 'Reloj Inteligente',
    description: 'Monitor de salud completo con GPS',
    price: 349,
    oldPrice: 449,
    emoji: '⌚',
    discount: 22,
    reviews: 201,
    category: 'wearables'
  },
  {
    id: 7,
    name: 'Powerbank 30000mAh',
    description: 'Carga rápida USB-C 65W',
    price: 59,
    emoji: '🔋',
    discount: 0,
    reviews: 523,
    category: 'accesorios'
  },
  {
    id: 8,
    name: 'Monitor 4K',
    description: 'Pantalla IPS 27" 144Hz',
    price: 399,
    oldPrice: 499,
    emoji: '🖥️',
    discount: 20,
    reviews: 98,
    category: 'monitores'
  },
  {
    id: 9,
    name: 'Teclado Mecánico',
    description: 'Switches RGB personalizables',
    price: 129,
    emoji: '⌨️',
    discount: 0,
    reviews: 156,
    category: 'periféricos'
  },
  {
    id: 10,
    name: 'Ratón Inalámbrico',
    description: 'Sensor 16000 DPI ajustable',
    price: 49,
    emoji: '🖱️',
    discount: 0,
    reviews: 234,
    category: 'periféricos'
  },
  {
    id: 11,
    name: 'Webcam 4K',
    description: 'Grabación en 4K con auto-enfoque',
    price: 179,
    emoji: '📹',
    discount: 0,
    reviews: 87,
    category: 'accesorios'
  },
  {
    id: 12,
    name: 'Micrófono USB',
    description: 'Studio quality para streaming',
    price: 89,
    emoji: '🎤',
    discount: 0,
    reviews: 112,
    category: 'audio'
  }
]

export default function Products({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('relevancia')

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'electrónica', name: 'Electrónica' },
    { id: 'audio', name: 'Audio' },
    { id: 'móvil', name: 'Móvil' },
    { id: 'tablets', name: 'Tablets' },
    { id: 'accesorios', name: 'Accesorios' }
  ]

  let filteredProducts = ALL_PRODUCTS.filter(product => {
    const matchCategory = selectedCategory === 'todos' || product.category === selectedCategory
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  // Ordenar
  if (sortBy === 'precio-asc') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sortBy === 'precio-desc') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sortBy === 'nuevos') {
    filteredProducts.reverse()
  }

  return (
    <div className="products">
      <div className="products-header">
        <h1>🛍️ Catálogo Completo</h1>
        <p>Explora nuestros {ALL_PRODUCTS.length} productos disponibles</p>
      </div>

      <div className="products-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-select"
        >
          <option value="relevancia">Ordenar por relevancia</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
          <option value="nuevos">Productos nuevos</option>
        </select>
      </div>

      <div className="products-container">
        <aside className="products-sidebar">
          <h3>Categorías</h3>
          <div className="categories-list">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="count">
                  {category.id === 'todos' 
                    ? ALL_PRODUCTS.length 
                    : ALL_PRODUCTS.filter(p => p.category === category.id).length
                  }
                </span>
              </button>
            ))}
          </div>

          <div className="sidebar-filters">
            <h4>Filtros</h4>
            <div className="filter-group">
              <label>
                <input type="checkbox" /> Con descuento
              </label>
              <label>
                <input type="checkbox" /> En stock
              </label>
              <label>
                <input type="checkbox" /> Mejor valorados
              </label>
            </div>
          </div>
        </aside>

        <main className="products-main">
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <div className="no-products-icon">🔍</div>
              <h3>No se encontraron productos</h3>
              <p>Intenta con otros términos de búsqueda o categorías</p>
            </div>
          ) : (
            <>
              <div className="products-count">
                Mostrando <strong>{filteredProducts.length}</strong> productos
              </div>
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                  />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

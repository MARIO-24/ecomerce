import './ProductCard.css'
import { useState } from 'react'

export default function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product)
    }
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <div className="product-card">
      <div className="product-badge">
        {product?.discount && <span className="discount">-{product.discount}%</span>}
      </div>
      <div className="product-image">
        <div className="product-emoji">{product?.emoji || '📦'}</div>
      </div>
      <div className="product-info">
        <h3>{product?.name}</h3>
        <p className="product-description">{product?.description}</p>
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐⭐</span>
          <span className="reviews">({product?.reviews || 0})</span>
        </div>
        <div className="product-price-section">
          <p className="product-price">${product?.price}</p>
          {product?.oldPrice && (
            <p className="product-old-price">${product?.oldPrice}</p>
          )}
        </div>
        <button 
          className={`product-button ${isAdded ? 'added' : ''}`}
          onClick={handleAddToCart}
        >
          {isAdded ? '✓ Agregado' : '🛒 Agregar al carrito'}
        </button>
      </div>
    </div>
  )
}

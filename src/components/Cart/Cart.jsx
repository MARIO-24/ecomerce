import './Cart.css'
import { useState } from 'react'

export default function Cart({ items = [] }) {
  const [cartItems, setCartItems] = useState(items)

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id)
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  const itemCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>🛒 Mi Carrito</h2>
        <span className="cart-badge">{itemCount} items</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="empty-icon">📭</div>
          <h3>Tu carrito está vacío</h3>
          <p>¡Agrega productos para comenzar!</p>
          <button className="continue-shopping">← Continuar comprando</button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {item.emoji || '📦'}
                </div>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>−</button>
                  <input 
                    type="number" 
                    value={item.quantity || 1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                  <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                </div>
                <div className="cart-item-total">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => removeItem(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Envío:</span>
              <span className="free">Gratis</span>
            </div>
            <div className="summary-row">
              <span>Impuestos:</span>
              <span>${(total * 0.08).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(total * 1.08).toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-actions">
            <button className="btn-checkout">Proceder al pago</button>
            <button className="btn-continue">← Continuar comprando</button>
          </div>
        </>
      )}
    </div>
  )
}

import './Checkout.css'
import { useState } from 'react'

export default function Checkout({ cartItems = [], onCheckoutComplete, onBack }) {
  const [step, setStep] = useState(1) // 1: Info, 2: Envío, 3: Pago, 4: Confirmación
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    address: '',
    zipCode: '',
    shippingMethod: 'standard',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: ''
  })

  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1)
      window.scrollTo(0, 0)
    }
  }

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmitOrder = (e) => {
    e.preventDefault()
    setOrderConfirmed(true)
    if (onCheckoutComplete) {
      onCheckoutComplete(formData)
    }
    setTimeout(() => {
      if (onBack) {
        onBack()
      }
    }, 3000)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
  const tax = subtotal * 0.08
  const shippingCost = formData.shippingMethod === 'express' ? 25 : 0
  const total = subtotal + tax + shippingCost

  if (orderConfirmed) {
    return (
      <div className="checkout">
        <div className="order-confirmation">
          <div className="confirmation-icon">✓</div>
          <h2>¡Pedido Confirmado!</h2>
          <p>Tu pedido ha sido procesado exitosamente</p>
          <div className="confirmation-details">
            <p><strong>Número de pedido:</strong> #TP{Math.floor(Math.random() * 1000000)}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Total pagado:</strong> ${total.toFixed(2)}</p>
          </div>
          <p className="confirmation-message">
            Recibirás un email de confirmación en breve. Tu pedido será entregado en {formData.shippingMethod === 'express' ? '2-3 días' : '5-7 días'} hábiles.
          </p>
          <button className="btn-home" onClick={onBack}>Volver al inicio</button>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout">
      <div className="checkout-container">
        {/* Steps Indicator */}
        <div className="steps-indicator">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <span>1</span>
            <p>Información</p>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <span>2</span>
            <p>Envío</p>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
            <span>3</span>
            <p>Pago</p>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 4 ? 'active' : ''}`}>
            <span>4</span>
            <p>Confirmación</p>
          </div>
        </div>

        <div className="checkout-content">
          <form onSubmit={handleSubmitOrder}>
            {/* Step 1: Información Personal */}
            {step === 1 && (
              <div className="step-content">
                <h2>Información Personal</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">Nombre *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Apellido *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Tu apellido"
                    />
                  </div>
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
                    <label htmlFor="phone">Teléfono *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="country">País *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un país</option>
                      <option value="MX">México</option>
                      <option value="CO">Colombia</option>
                      <option value="AR">Argentina</option>
                      <option value="PE">Perú</option>
                      <option value="CL">Chile</option>
                      <option value="ES">España</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">Estado/Provincia *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="Tu estado"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">Ciudad *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Tu ciudad"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">Código Postal *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Dirección *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Calle, número, apartamento"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Envío */}
            {step === 2 && (
              <div className="step-content">
                <h2>Método de Envío</h2>
                <div className="shipping-options">
                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="standard"
                      checked={formData.shippingMethod === 'standard'}
                      onChange={handleChange}
                    />
                    <div className="shipping-info">
                      <h3>Envío Estándar</h3>
                      <p>5-7 días hábiles</p>
                      <span className="price">Gratis</span>
                    </div>
                  </label>

                  <label className="shipping-option">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value="express"
                      checked={formData.shippingMethod === 'express'}
                      onChange={handleChange}
                    />
                    <div className="shipping-info">
                      <h3>Envío Express</h3>
                      <p>2-3 días hábiles</p>
                      <span className="price">+ $25.00</span>
                    </div>
                  </label>
                </div>

                <div className="shipping-summary">
                  <p>
                    <strong>Dirección de entrega:</strong><br />
                    {formData.address && `${formData.address}, `}
                    {formData.city && `${formData.city}, `}
                    {formData.state && `${formData.state} `}
                    {formData.zipCode}
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Pago */}
            {step === 3 && (
              <div className="step-content">
                <h2>Información de Pago</h2>
                <p className="payment-subtitle">Ingresa los datos de tu tarjeta de crédito</p>

                <div className="card-preview">
                  <div className="card">
                    <div className="card-chip">💳</div>
                    <div className="card-number">
                      {formData.cardNumber ? formData.cardNumber.replace(/\d(?=\d{4})/g, '*') : '**** **** **** ****'}
                    </div>
                    <div className="card-info">
                      <div className="card-holder">
                        <small>Titular</small>
                        <p>{formData.cardName || 'Tu Nombre'}</p>
                      </div>
                      <div className="card-expiry">
                        <small>Vencimiento</small>
                        <p>{formData.cardExpiry || 'MM/AA'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cardName">Nombre en la Tarjeta *</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                    placeholder="Como aparece en tu tarjeta"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cardNumber">Número de Tarjeta *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '').slice(0, 16)
                      handleChange({ target: { name: 'cardNumber', value } })
                    }}
                    required
                    placeholder="1234 5678 9012 3456"
                    maxLength="16"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cardExpiry">Vencimiento (MM/AA) *</label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '').slice(0, 4)
                        if (value.length >= 2) {
                          value = value.slice(0, 2) + '/' + value.slice(2)
                        }
                        handleChange({ target: { name: 'cardExpiry', value } })
                      }}
                      required
                      placeholder="12/25"
                      maxLength="5"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardCVC">CVC *</label>
                    <input
                      type="text"
                      id="cardCVC"
                      name="cardCVC"
                      value={formData.cardCVC}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 3)
                        handleChange({ target: { name: 'cardCVC', value } })
                      }}
                      required
                      placeholder="123"
                      maxLength="3"
                    />
                  </div>
                </div>

                <p className="payment-notice">
                  ℹ️ Tu información de pago es segura y encriptada
                </p>
              </div>
            )}

            {/* Step 4: Resumen y Confirmación */}
            {step === 4 && (
              <div className="step-content">
                <h2>Resumen del Pedido</h2>
                
                <div className="order-summary">
                  <h3>Artículos</h3>
                  <div className="order-items">
                    {cartItems.map(item => (
                      <div key={item.id} className="order-item">
                        <div className="item-details">
                          <span className="item-emoji">{item.emoji}</span>
                          <div>
                            <p className="item-name">{item.name}</p>
                            <p className="item-qty">x{item.quantity || 1}</p>
                          </div>
                        </div>
                        <p className="item-price">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-totals">
                  <div className="total-row">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Envío:</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="total-row">
                    <span>Impuestos (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="total-row final">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="confirmation-info">
                  <h3>Información de Entrega</h3>
                  <p>
                    <strong>Destinatario:</strong> {formData.firstName} {formData.lastName}
                  </p>
                  <p>
                    <strong>Dirección:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                  </p>
                  <p>
                    <strong>Email de confirmación:</strong> {formData.email}
                  </p>
                  <p>
                    <strong>Método de envío:</strong> {formData.shippingMethod === 'express' ? 'Express (2-3 días)' : 'Estándar (5-7 días)'}
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="checkout-buttons">
              {step > 1 && (
                <button type="button" className="btn-back" onClick={handlePrevStep}>
                  ← Atrás
                </button>
              )}
              
              {step < 4 ? (
                <button type="button" className="btn-next" onClick={handleNextStep}>
                  Siguiente →
                </button>
              ) : (
                <button type="submit" className="btn-complete">
                  Completar Compra - ${total.toFixed(2)}
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <aside className="checkout-summary">
          <h3>Resumen</h3>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <span>{item.name} x{item.quantity || 1}</span>
                <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-divider"></div>
          <div className="summary-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}

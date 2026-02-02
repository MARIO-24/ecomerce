import './ProductCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product?.image} alt={product?.name} />
      </div>
      <div className="product-info">
        <h3>{product?.name}</h3>
        <p className="product-price">${product?.price}</p>
        <button className="product-button">Agregar al carrito</button>
      </div>
    </div>
  )
}

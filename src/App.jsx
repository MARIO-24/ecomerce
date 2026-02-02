import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      ))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
    
    setCartCount(prev => prev + 1)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Header />
            <main>
              <Home onAddToCart={handleAddToCart} />
            </main>
          </>
        )
      case 'products':
        return (
          <main>
            <Products onAddToCart={handleAddToCart} />
          </main>
        )
      case 'about':
        return (
          <main>
            <About />
          </main>
        )
      case 'contact':
        return (
          <main>
            <Contact />
          </main>
        )
      case 'cart':
        return (
          <main>
            <Cart items={cartItems} />
          </main>
        )
      default:
        return (
          <>
            <Header />
            <main>
              <Home onAddToCart={handleAddToCart} />
            </main>
          </>
        )
    }
  }

  return (
    <>
      <Navbar 
        cartCount={cartCount}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App

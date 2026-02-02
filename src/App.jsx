import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App

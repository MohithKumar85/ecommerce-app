import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Shop from './components/Shop'
import More from './components/More'
import Footer from './components/footer'
import Login from './pages/Login'
import Signup from './pages/Signup'

const Home = () => (
  <div className='w-full overflow-hidden'>
    <Header/>
    <About/>
    <Shop/>
    <More/>
    <Footer/>
  </div>
)

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App

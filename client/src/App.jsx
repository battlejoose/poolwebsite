import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookOnline from './pages/BookOnline'
import ThinkingAboutAPool from './pages/ThinkingAboutAPool'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-online" element={<BookOnline />} />
          <Route path="/thinking-about-a-pool" element={<ThinkingAboutAPool />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

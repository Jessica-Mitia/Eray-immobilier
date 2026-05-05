import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BlogPage from './components/blog/BlogPage'
import ArticleDetail from './components/blog/ArticleDetail'
import Produits from './components/Produits'
import { Footer } from './components/layout/Footer'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticleDetail />} />
          <Route path="/produits" element={<Produits />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
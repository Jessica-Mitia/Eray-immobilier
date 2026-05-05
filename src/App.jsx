import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BlogPage from './components/blog/BlogPage'
import ArticleDetail from './components/blog/ArticleDetail'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/blog" replace />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
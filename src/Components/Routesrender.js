import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Result from './Result'
import Home from './Home'
import Search from './Search'
const Routesrender = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<><Search /><Result /></>} />
      <Route path="news" element={<><Search /><Result /></>} />
      <Route path="image" element={<><Search /><Result /></>} />
      <Route path="video" element={<><Search /><Result /></>} />

    </Routes>
  )
}

export default Routesrender
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Result from './Result'
import Home from './Home'
import Search from './Search'
import NotFound from './NotFound'
const Routesrender = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<><Search /><Result /></>} />
      <Route path="/news" element={<><Search /><Result /> </>} />
      <Route path="/image" element={<><Search /><Result /></>} />
      <Route path="/video" element={<><Search /><Result /></>} />
      <Route path="/add" element={<Navigate to="/search" />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}

export default Routesrender
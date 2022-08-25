import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Homepage from './pages/Homepage'
import Products from './pages/Products'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import { data } from './data'
import { getCatalogs } from './redux/slices/catalogSlice'
import Register from './pages/Register'
import Login from './pages/Login'
import { checkUserAuth } from './redux/slices/userSlice'
import Profile from './pages/Profile'
import RequireAuth from './components/RequireAuth'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatalogs(data))
    dispatch(checkUserAuth())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

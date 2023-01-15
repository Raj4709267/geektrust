import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Products from './Products'

function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default AllRoutes
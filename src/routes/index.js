import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Product />} />
            </Routes>
        </>
    )
}

export default RouteApp
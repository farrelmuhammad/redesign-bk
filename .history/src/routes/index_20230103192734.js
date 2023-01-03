import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const RouteApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Home />} />
            </Routes>
        </>
    )
}

export default RouteApp
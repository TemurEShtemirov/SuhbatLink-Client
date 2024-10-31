import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'

export default function AppRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </>
    )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Chat from '../pages/chat'

export default function AppRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/chat' element={<Chat />} />
            </Routes>
        </>
    )
}

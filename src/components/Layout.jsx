import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <div className="w-screen h-screen flex flex-col bg-white">
            <Header />
                <Outlet />
            </div>
        </>
    )
}

export default Layout
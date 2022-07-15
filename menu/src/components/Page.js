import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from './Menu'

function Page(props) {
    return (
        <>
            <Menu />
            <div className="page">
                <Outlet />
            </div>
        </>
    )
}

export default Page
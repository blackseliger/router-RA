import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Page(props) {


    return (
        <div className='page'>
            <Header />
            <main className="crud__main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

Page.propTypes = {}

export default Page

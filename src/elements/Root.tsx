import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { CONTENT as content } from '../assets/content';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (
        <>
            <Header title={content.header.title} navigation={content.header.navigation} />

            <div className='container'>
                <Outlet />
            </div>

            <Footer />
        </>
    )
}

export default Root
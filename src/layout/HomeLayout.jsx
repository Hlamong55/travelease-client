import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import ErrorPage from '../pages/ErrorPage';


const HomeLayout = () => {
    return (
        <div>

            <header className='h-20'>
                <Navbar></Navbar>
            </header>
            <main className='min-h[calc(100vh-80px)]'>
                <Outlet>
                   
                </Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
    
        </div>
    );
};

export default HomeLayout;
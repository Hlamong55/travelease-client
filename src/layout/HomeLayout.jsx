import React from 'react';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import ErrorPage from '../pages/ErrorPage';


const HomeLayout = () => {
    return (
        <div>

            <header>
                <Navbar></Navbar>
            </header>
            <main>
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
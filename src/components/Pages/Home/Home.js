import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Products from './Products/Products'

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Header></Header>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
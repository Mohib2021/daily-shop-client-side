import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import Header from './Header/Header';
import Products from './Products/Products'

const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;
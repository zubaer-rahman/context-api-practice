import React from 'react';
import Categories from '../Categories/Categories';

const Home = () => {
    return (
        <div style={{border: "1px solid purple"}}>
            <h1>Select your Categories</h1>
            <Categories/> 
        </div>
    );
};

export default Home;
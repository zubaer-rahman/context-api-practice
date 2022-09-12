import React, { useContext, useState } from 'react';
import { categoryContext } from '../../App';

const Header = () => {
    const [category, setCategory] = useContext(categoryContext);
    return (
        <div>
            <h1>This is Header: {category}</h1>
            <button onClick={()=> setCategory('Laptop')}> Laptop </button>
            <button onClick={()=> setCategory('Mobile')}> Mobile </button>
            <button onClick={()=> setCategory('Camera')}> Camera </button>
        </div>
    );
};

export default Header;
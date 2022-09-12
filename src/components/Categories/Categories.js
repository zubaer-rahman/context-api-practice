import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [
    {brand: "samsung", category:"mobile"}, {brand: "apple", category:"mobile"}, {brand: "tesla", category:"mobile"}, 
    {brand: "cannon", category:"camera"}, {brand: "nikkon", category:"camera"}, {brand: "sony", category:"camera"},
    {brand: "hp", category:"laptop"}, {brand: "apple", category:"laptop"}, {brand: "dell", category:"laptop"}
];

const Category = () => {
    const [products, setProducts] = useState([]);
    const [category] = useContext( categoryContext );

    useEffect(() => {
        const productsToSet = allProducts.filter(pd => pd.category === category.toLowerCase());
        setProducts(productsToSet);
    },[category]);

    return (
        <div>
            <h2>This is Category</h2>
            {
                products.map((pd, i) => <CategoryDetail product={pd} key={i} />)
            }
        </div>
    );
};

export default Category;
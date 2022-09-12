import React, { useContext } from 'react';
import { categoryContext } from '../../App'; 

const CategoryDetail = ({product}) => {
     return (
        <div>
            <h4>This is your category details</h4>
            <h6>Selected Product: {product.brand} </h6>
            
        </div>
    );
};

export default CategoryDetail;
import React from 'react';
import Pictures from "./Pictures"

const ProductList = props => {
    return(
        <div className = "Banner">
            {props.title} 
            <Pictures />                 
        </div>

    );
};


export default ProductList;
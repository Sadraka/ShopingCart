import React ,{useContext} from 'react';
import ProductFunc from './Productsco/ProductFunc';
import Styles from "./Productsco/Products.module.css"
import { Link } from 'react-router-dom';
import { contextData } from './ProductsContexProvider';
const ProductsFunc = () => {
const products=useContext(contextData)

    return (
        <>
        
            <div className={Styles.cards}>
                
                {products.length ? products.map(item =><Link key={item.id} to={`/products/${item.id}`}><ProductFunc data={item} /></Link>) :
                    <h1>در حال بارگذاری ...</h1>}
                </div>
            
            
        </>
    );
};

export default ProductsFunc;
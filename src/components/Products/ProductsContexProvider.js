import React, { createContext, useState, useEffect } from 'react';
import Api from './Productsco/Api';

export const contextData = createContext();
const ProductsContexProvider = (props) => {
   
    const [products, setProducts] = useState([]);


    // gereftan etelaat az api ba async await
    useEffect(() => {
        const getData = async () => {
            setProducts(await Api("/"))
        }
        getData()
    }, [])
    return (

        <contextData.Provider value={products}>
            {props.children}
        </contextData.Provider>
    )

};

export default ProductsContexProvider;
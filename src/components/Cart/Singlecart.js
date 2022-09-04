import React, { useContext } from 'react';
import Styles from "./Singlecart.module.css";
import { CartContext } from './CartContextProvider';
import { Link } from 'react-router-dom';
import Plus from "../images/plus-solid.svg";
import Minus from "../images/minus-solid.svg";
import Trash from "../images/trash-solid.svg"

const Singlecart = ({ data }) => {
    const { dispatch } = useContext(CartContext);
    return (
        <>
            <div className={Styles.main}>
                <div className={Styles.img}><Link to={`/products/${data.id}`}><img src={data.image} alt="product" /></Link></div>
                <Link to={`/products/${data.id}`}><div>
                    <h1 className={Styles.category}>{data.category}</h1>
                    <p className={Styles.price}>هزار تومان {data.price}</p>
                </div>
                </Link>
                <span>{data.quantity}</span>
                <div className={Styles.button}>
                    {data.quantity >= 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "INCREASE_ITEM", payload: data }) }}><img src={Plus} alt="plus" /></button>}
                    {data.quantity === 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "REMOVE_ITEM", payload: data }) }}><img src={Trash} alt="trash" /> </button>}
                    {data.quantity > 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "DECREACE_ITEM", payload: data }) }}><img src={Minus} alt="mines" /> </button>}
                </div>

            </div>
        </>
    );
};

export default Singlecart;
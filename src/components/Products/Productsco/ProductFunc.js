import React, { useContext } from 'react';
import Styles from "./Product.module.css";
import Plus from "../../images/plus-solid.svg";
import Minus from "../../images/minus-solid.svg";
import Trash from "../../images/trash-solid.svg"
// Context
import { CartContext } from '../../Cart/CartContextProvider';

const ProductFunc = ({ data }) => {

  const { state, dispatch } = useContext(CartContext);

  const ISinCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result
  }

  const quantityCount = (state, id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    if (index === -1) {
      return false;
    } else {
      return state.selectedItems[index].quantity
    }
  }

  return (
    <>
      <div className={Styles.card}>
        <div className={Styles.img}>
          <img src={data.image} alt="salam" />
        </div>
        <h1>{`...${data.title.substring(0, 28)}`}</h1>
        {/* <p className={Styles.description}>{props.description}</p> */}
        <div className={Styles.footer}>
          <div className={Styles.btn}>
            {

              ISinCart(state, data.id) ?
                <button onClick={(event) => { event.preventDefault(); dispatch({ type: "INCREASE_ITEM", payload: data }) }}><img src={Plus} alt="plus" /></button>
                :
                <button onClick={(event) => { event.preventDefault(); dispatch({ type: "ADD_ITEM", payload: data }) }}>افزودن به سبد خرید </button>

            }
            {
              quantityCount(state, data.id) >= 1 && <span>{quantityCount(state, data.id)}</span>
            }
            {
              quantityCount(state, data.id) === 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "REMOVE_ITEM", payload: data }) }} > <img src={Trash} alt="trash" /> </button>

            }

            {
              quantityCount(state, data.id) > 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "DECREACE_ITEM", payload: data }) }} ><img src={Minus} alt="mines" /></button>
            }

          </div>
          <p className={Styles.price}>{data.price}</p>
        </div>
      </div>

    </>
  );
};

export default ProductFunc;
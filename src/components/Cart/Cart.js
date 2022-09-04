import React, { useContext } from 'react';
import { CartContext } from './CartContextProvider';
import Styles from './Cart.module.css'
import Singlecart from './Singlecart';
const Cart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <>
            {state.checkOut ? <h1>پرداخت با موفقیت انجام شد</h1>
                :
                <div className={Styles.main}>
                    <div className={Styles.checkOut}>
                        <p>تعداد محصولات :{state.itemsCounter}</p>
                        <p>مجموع  :{state.total} هزار تومان</p>
                        <div className={Styles.button}>
                            {state.itemsCounter > 0 && <button onClick={() => dispatch({ type: "CHECKOUT", payload: state })}>پرداخت</button>}
                            {state.itemsCounter > 0 && <button onClick={() => dispatch({ type: "CLEAR", payload: state })}>حذف همه</button>}
                        </div>


                    </div>
                    <div className={Styles.cartList}>
                        {state.selectedItems.map(item => <Singlecart key={item.id} data={item} />)}

                    </div>


                </div>}

        </>
    );
};

export default Cart;
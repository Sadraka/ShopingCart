import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { contextData } from '../ProductsContexProvider';
import Styles from './ProductsDetail.module.css';
import { CartContext } from '../../Cart/CartContextProvider';
const ProductDetail = () => {
    const params = useParams()
    const id = params.id
    const productsArray = useContext(contextData);
    const products = productsArray[id - 1]

    // use cartContext
    const { state, dispatch } = useContext(CartContext);
    // use IsinCart
    const ISinCart = (state, id) => {
        const result = !!state.selectedItems.find(item => item.id === id);
        return result
    }
    // baraye yaftan products dakhel state va dar selectedItems
    const quantityCount = (state, id) => {
        const index = state.selectedItems.findIndex(item => item.id === id);
        if (index === -1) {
          return false;
        } else {
          return state.selectedItems[index].quantity
        }
      }

    // const [productData, setProductData] = useState([])
    // useEffect(() => {
    //     const getData = async () => {
    //         setProductData(await (Api(`/${id}`)))
    //     }
    //     getData()
    // },[])

    return (
        <>
            {products ? <div className={Styles.main}>
                <div className={Styles.description}>
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    <p>$ {products.price} </p>
                    {console.log(state.selectedItems)}
                    {
                        ISinCart(state, products.id) ?
                            <button onClick={(event) => { event.preventDefault(); dispatch({ type: "INCREASE_ITEM", payload: products }) }}>افزایش</button>
                            :
                            <button onClick={(event) => { event.preventDefault(); dispatch({ type: "ADD_ITEM", payload: products }) }}>افزودن به سبد خرید </button>

                    }
                    { quantityCount(state,products.id)=== 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "REMOVE_ITEM", payload: products}) }}> سطل زباله</button>}
                    { quantityCount(state,products.id)> 1 && <button onClick={(event) => { event.preventDefault(); dispatch({ type: "DECREACE_ITEM", payload: products }) }}>کاهش  </button>}

                    <button> <Link to="/products"> بازگشت به محصولات </Link> </button>
                </div>
                <div className={Styles.img}>
                    <img src={products.image} alt='prductImage' />
                </div>

            </div>
                :
                <h1>لطفا کمی صبر کنید</h1>
            }

        </>
    );
};

export default ProductDetail;
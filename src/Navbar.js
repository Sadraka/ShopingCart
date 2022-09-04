import React,{useContext} from 'react';
import Styles from "./Navbar.module.css"
import logo from "./components/images/logo.jpg"
import Styled from 'styled-components';
import { Link } from "react-router-dom";
import ShopSvg from './components/images/shopping-cart-solid.svg';
import { CartContext } from './components/Cart/CartContextProvider';
const Ul = Styled.ul`

`;

const Navbar = () => {
    const {state}=useContext(CartContext)
    return (

        <header className={Styles.header}>

            <div>
                <Ul>
                    <li><Link to="/">خانه</Link></li>
                    <li><Link to="/products">محصولات</Link></li>
                    <li><Link to="/aboutus"> درباره‌ ما</Link></li>
                    <li><Link to="/contactus">تماس با ما </Link></li>
                    <li><Link to="/whyus">چرا ما؟</Link></li>
                    <li className={Styles.cart}><Link to="/Cart">
                        <div>
                        <img src={ShopSvg} alt="shopSvg"></img>
                        </div>
                        <span>{state.itemsCounter}</span>
                    </Link></li>
                </Ul>
            </div>
            <img src={logo} alt="Logo" />

        </header>


    );
};

export default Navbar;
import Cart_icon from '../../assets/Cart-Icon.png';
import style from './Cart.module.css'
function Cart() {
    return(
        <div className="d-flex">
            {/*<!-- Cart item number -->*/}
            <span id= {style["nav-cart-items-number"]}>0</span>
            {/*<!-- Cart icon -->*/}
            <a href="https://www.amazon.com/gp/cart/view.html?ref_=nav_cart" id="nav-cart-link">
                <img src={Cart_icon} alt="cart icon" className={style["nav-cart-icon"]}/>
            </a>                        
        </div>
    )
}

export default Cart;
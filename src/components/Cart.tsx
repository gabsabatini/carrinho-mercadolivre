import React from "react";
import {AiOutlineShoppingCart} from 'react-icons/Ai'

const Cart = () => {

    return (
        <div className="cart">
            <button>
                <AiOutlineShoppingCart/>
                <span className="cart-cont">1</span>
            </button>
        </div>
    );

}

export default Cart;
'use client';   

import Context, { ContextType } from "@/context/Context";
import React, { useContext } from "react";
import {AiOutlineShoppingCart} from 'react-icons/Ai'

const Cart = () => {

    const context = useContext(Context);
    const { cartItems, cartVisible, setCartVisible } = context as ContextType;

    return (
        <div className="cart">
            <button onClick={ () => setCartVisible(!cartVisible) }>
                <AiOutlineShoppingCart/>
                <span className="cart-cont">{cartItems.length}</span>
            </button>
        </div>
    );

}

export default Cart;
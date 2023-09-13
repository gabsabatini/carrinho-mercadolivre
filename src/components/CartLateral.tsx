'use client';

import React, { useContext } from "react";
import CartItem from "./CartItem";
import Context, { ContextType } from "@/context/Context";
import formatCurrency from "@/utils/formatCurrency";

const CartLateral = () => {

    const context = useContext(Context);
    const { cartItems, cartVisible } = context as ContextType;

    //Percorre o array, soma o valor e armazena no acc (acumulador) até chegar ao fim do array
    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc;
    }, 0);

    return (
        <section className={`cart-lateral ${cartVisible ? 'cart-active' : ''}`}>

            {cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Seu carrinho está vazio</p>
                    <p className="icon-sad">:(</p>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}
                    </div>
                    <div className="cart-resumo">
                        Total: {formatCurrency(totalPrice)}
                    </div>
                </>
            )}

        </section>
    );
}

export default CartLateral;
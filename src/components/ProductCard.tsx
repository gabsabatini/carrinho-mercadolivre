import React, { useContext } from "react";
import { BsFillCartPlusFill } from 'react-icons/Bs';
import { ProductData } from "@/types/types";
import formatCurrency from "@/utils/formatCurrency";
import Context, { ContextType } from "@/context/Context";

const ProductCard = ({ data }: { data: ProductData }) => {
    const { title, thumbnail, price } = data;
    const free_shipping = data.shipping.free_shipping;
    const { amount, quantity } = data.installments;

    const context = useContext(Context);
    const { cartItems, setCartItems } = context as ContextType;

    const handleAddCart = () => {
        setCartItems([ ...cartItems, data ]);
    }

    return (
        <div className="product-card">
            <img className="cart-img" src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} />
            <div className="cart-infos">
                <h2 className="cart-title">{title}</h2>
                <div className="block-prices">
                    <h2 className="cart-price">{formatCurrency(price)}</h2>
                    <p className="cart-installments">em 
                        <span>{quantity}x {formatCurrency(amount)}</span>
                    </p>
                </div>
                {free_shipping ? (<p className="frete-gratis">Frete grátis</p>) : ('')}
            </div>

            <button type="button" className="cart-add" onClick={handleAddCart}>
                <BsFillCartPlusFill />
            </button>
        </div>

    );
}

export default ProductCard;

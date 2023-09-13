import Context, { ContextType } from "@/context/Context";
import { ProductData } from "@/types/types";
import formatCurrency from "@/utils/formatCurrency";
import React, { useContext } from "react";
import { BsTrash3 } from 'react-icons/Bs';

const CartItem = ({ data }: { data: ProductData }) => {

    const { id, title, thumbnail, price } = data;

    const context = useContext(Context);
    const { cartItems, setCartItems } = context as ContextType;

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id);
        setCartItems(updatedItems);
    }

    return (
        <div className="cart-item">
            <img src={thumbnail}/>

            <div className="cart-item-infos"    >
                <h3 className="cart-item-title">{title}</h3>
                <span className="cart-item-price">{formatCurrency(price)}</span>

                <button onClick={handleRemoveItem} className="remove-item"><BsTrash3/></button>
            </div>

        </div>
    );
}

export default CartItem;
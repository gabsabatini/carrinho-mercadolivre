'use client';

import React, { useState, ReactNode } from "react";
import { ProductData } from "@/types/types";
import Context from "./Context";

type ProviderProps = {
    children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {

    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [cartItems, setCartItems] = useState<ProductData[]>([]);
    const [cartVisible, setCartVisible] = useState<boolean>(false);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        cartVisible,
        setCartVisible
    };

    return (
        <>
            <Context.Provider value={ value }>
                {children}
            </Context.Provider>
        </>
    );
}

export default Provider;
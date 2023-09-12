'use client';

import React, { useState, ReactNode } from "react";
import Context from "./context";
import { ProductData } from "@/types/types";

type ProviderProps = {
    children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {

    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const value = {
        products,
        setProducts,
        loading,
        setLoading
    };

    return (
        <div>
            <Context.Provider value={ value }>
                {children}
            </Context.Provider>
        </div>
    );
}

export default Provider;
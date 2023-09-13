'use client';

import fetchProducts from "@/api/fetchProducts";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import Context, { ContextType } from "@/context/Context";

const Products = () => {

    const context = useContext(Context);
    const { products, setProducts, loading, setLoading } = context as ContextType; // Use 'as' para indicar o tipo

    useEffect(() => {
        fetchProducts('macbook').then((response: any) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    return (
        //Se loading for true renderiza ele, senão puxa os produtos
        (loading && <Loading />) || (
            <section className="products container">
                {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>
        )
    );
}

export default Products;
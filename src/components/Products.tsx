'use client';

import fetchProducts from "@/api/fetchProducts";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductData } from "@/types/types";
import Loading from "./loading";

const Products = () => {

    const [products, setProducts] = useState<ProductData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchProducts('iphone').then((response: any) => {
            setProducts(response);
            setLoading(false);
        });
    }, []);

    //console.log(products);

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
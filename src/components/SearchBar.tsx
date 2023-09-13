'use client';

import fetchProducts from "@/api/fetchProducts";
import Context, { ContextType } from "@/context/Context";
import React, { useContext } from "react";
import { useState } from "react";
import {BsSearch} from 'react-icons/Bs';

const SearchBar = () => {

    const context = useContext(Context);
    const { setProducts, setLoading } = context as ContextType;

    const [searchValue, setSearchValue] = useState('');

    const handleForm = async (e:any) => {
        e.preventDefault();
        setLoading(true);

        const products = await fetchProducts(searchValue);
        setProducts(products);
        setLoading(false);
        setSearchValue('');
    }

    return (
        <form onSubmit={handleForm}>
            <input type="search" placeholder="Buscar Produtos" 
            required 
            value={searchValue}
            onChange={ ( {target} ) => setSearchValue(target.value)} 
            />
            <button type="submit" className="btn-enviar"><BsSearch/></button>
        </form>
    );

}

export default SearchBar;
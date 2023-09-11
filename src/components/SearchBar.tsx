'use client';

import fetchProducts from "@/api/fetchProducts";
import React, { useState } from "react";
import {BsSearch} from 'react-icons/Bs';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleForm = async (e:any) => {
        e.preventDefault();

        const products = await fetchProducts(searchValue);
        console.log(products);
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
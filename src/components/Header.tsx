import React from "react";
import SearchBar from "./SearchBar";
import Cart from "./Cart";

const Header = () => {

    return (
    
        <header>
            <div className="container">
 
                <SearchBar/>
                <Cart/>

            </div>

        </header>

    );

}

export default Header;
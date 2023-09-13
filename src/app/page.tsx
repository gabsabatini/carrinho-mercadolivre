import Header from "@/components/Header";
import Products from "@/components/Products";
import CartLateral from "@/components/CartLateral";
import Provider from "@/context/Provider";
import React from "react";

export default function Home() {
  return (
    <>
      <Provider>
        <Header />
        <Products />
        <CartLateral />
      </Provider>
    </>
  );

}

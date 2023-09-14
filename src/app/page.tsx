import Header from "@/components/Header";
import Products from "@/components/Products";
import CartLateral from "@/components/CartLateral";
import Provider from "@/context/Provider";
import React from "react";

export default function Home() {

  //Componentes dentro do Provider podem compartilhar states entre si

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

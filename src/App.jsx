import React from "react";
import { Header } from "../Header";
import { Footer } from "../src/components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../src/components/ItemListContainer";
import Carrito from "../src/components/Carrito";
import ProductDetailContainer from "../src/components/ProductDetailContainer";//cambiar por mis productos 

export default () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito/>} />
        <Route path="/categorias/:id" element={<ItemListContainer/>} />
        <Route path="/producto/:id" element={<ProductDetailContainer/>} />
      </Routes>

      <Footer />
    </>
  );
}
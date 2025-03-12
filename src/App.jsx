import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Carrito from "./components/Carrito";
import ItemDetail from "./components/ItemDetail"; 
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ItemDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

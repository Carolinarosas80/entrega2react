import {  NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <h1>Mi Ecommerce </h1 >
      <h2 >Las Mantas de la Nona</h2>
      <nav className="header__nav">
        <NavLink viewTransition to="/" className="header__link">Home</NavLink>
        <NavLink viewTransition to="/categorias/Para la cama" className="header__link">Para la cama</NavLink>
        <NavLink viewTransition to="/categorias/Para la mesa" className="header__link">Para la mesa </NavLink>
        <NavLink viewTransition to="/categorias/Deco" className="header__link">Deco</NavLink>
        <NavLink viewTransition to="/carrito" className="header__link">
          <img src="/shopping-cart.svg" alt="Icono de carrito" />
        </NavLink>
      </nav>
    </div>
  );
}


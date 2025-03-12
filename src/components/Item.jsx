import { Link } from "react-router-dom"

const Item = (props) => {
    return (
        <article className="product-card" title={props.producto.title}>
            <h3 className="product-card__title">{props.producto.name}</h3>
            <img src={props.producto.image} alt={props.producto.title} className="product-card__image" />
            <p className="product-card__description">${props.producto.price}</p>
            <Link to={`/producto/${props.producto.id}`}>ver detalle</Link>
        </article>
    )
}

export default Item
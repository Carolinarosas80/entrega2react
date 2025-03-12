import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetail = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch("/productos.json");

                if (!response.ok) {
                    throw new Error("Error al cargar los productos");
                }

                const data = await response.json();
                const productoEncontrado = data.find(p => p.id === parseInt(id));

                if (!productoEncontrado) {
                    throw new Error("Producto no encontrado");
                }

                setProducto(productoEncontrado);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <p>Cargando producto...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{producto.name}</h1>
            <img src={`/images/${producto.image}`} alt={producto.name} />
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
        </div>
    );
};

export default ItemDetail;

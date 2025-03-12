import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Item from "./Item";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoria } = useParams(); // Obtener la categoría desde la URL

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

                // Filtrar productos por categoría
                const productosFiltrados = categoria
                    ? data.filter(producto => 
                        producto.category.trim().toLowerCase() === categoria.trim().toLowerCase()
                    )
                    : data;

                setProductos(productosFiltrados);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [categoria]);

    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="fluid-grid">
            {productos.length > 0 ? (
                productos.map((producto) => (
                    <Item key={producto.id} producto={producto} />
                ))
            ) : (
                <p>No hay productos disponibles en esta categoría.</p>
            )}
        </div>
    );
};

export default ItemListContainer


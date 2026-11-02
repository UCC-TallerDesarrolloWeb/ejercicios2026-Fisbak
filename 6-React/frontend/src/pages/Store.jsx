import {useState, useEffect} from "react";
import {addToCart, getProducts} from "@api/cartApi.js";
import {formatPrice} from "@utils/format.js";

const Store = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try{
            const data = await getProducts();
            setProducts(data);
        }catch(Error){
            console.log("Error al obtener el listado de productos" + Error)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            {  products.map((product,index) => (
                <div key={index}>
                    <h3>{product.nombre}</h3>
                    <img  src={`https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${product.imagen}`} alt={product.name}/>
                    <p>formatPrice({product.precio})</p>
                    <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                </div>
            ))}
        </>
    )
}

export default Store;
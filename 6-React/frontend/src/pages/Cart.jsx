import {useEffect, useState} from "react";
import {getCart, removeItem, updateToCart} from "@api/cartApi.js";
import {formatPrice} from "@utils/format.js";
import "@styles/Cart.scss";

const cart = () => {
    const [cart, setCart] = useState([]);

    const fetchCart = async () => {
        try {
            const data = await getCart();
            setCart(data);
        } catch (Error) {
            console.log("Error al obtener el listado de productos" + Error)
        }
    }

    useEffect(() => {
        fetchCart();
    }, [])

    const handleIncrease = async (prod) => {
        const newQty = prod.qty+1;
        setCart((prev ) => prev.map((p) => p.id === prod.id ? {...p, qty: newQty} : p));

        try{
            await updateToCart(prod.id, newQty);
        }catch(error){
        console.Error("Error al actualizar la cantidad")
        }
    }

    const handleDecrease = async (prod) => {
        if(prod.qty === 1) return;

        const newQty = prod.qty-1;
        setCart((prev ) => prev.map((p) => p.id === prod.id ? {...p, qty: newQty} : p));

        try{
            await updateToCart(prod.id, newQty);
        }catch(error){
            console.Error("Error al actualizar la cantidad")
        }
    }

    const handleDelete = async (id) => {
        try{
            await removeItem(prod.id);
            setCart((prev) => prev.filter((item) => item.id !== id))
        }catch(error){
            console.Error("Error al eliminar producto")
        }
    }

    return (
        <>
            {
                cart.map((prod,index) => (
                    <div key={index}>
                        <h3>{prod.nombre}</h3>

                        <p>
                            Cantidad:
                            <span className="material-symbols-outlined" onClick={() => handleIncrease(prod)}>add</span>
                            <span className="material-symbols-outlined" onClick={() => handleDecrease(prod)}>remove</span>
                            <span className="material-symbols-outlined" onClick={() => handleDelete(prod.id)}>delete</span>
                        </p>
                    </div>
                ))
            }
        </>
    )
}

export default Cart;
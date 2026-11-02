/**
 * Formatea el precio para que quede $ ##.###,##
 * @method filtrarProductos
 */
let formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(price);
}
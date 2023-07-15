export const isInCart = (product, cartItems)  => {
    return cartItems.find(item => item._id === product._id);
}
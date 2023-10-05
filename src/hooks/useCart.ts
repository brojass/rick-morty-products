import { useEffect } from "react";
import { ACTIONS } from "../providers/constants";

const useCart = (state, dispatch) => {
    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || []
        dispatch({ type: ACTIONS.ADD_TO_CART, value: { cartItems: cartItems } });
    }, []);

    const addToCart = (item) => {
        const cartItems = state.cartItems.concat(item)
        dispatch({ type: ACTIONS.ADD_TO_CART, value: { cartItems: cartItems } });
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const removeToCart = (item) => {
        const index = state.cartItems.findIndex(itemIndex => item.id === itemIndex.id)
        const cartItems = state.cartItems.concat([])
        cartItems.splice(index, 1)
        dispatch({ type: ACTIONS.REMOVE_TO_CART, value: { cartItems: cartItems } });
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const isInCart = (item) => {
        const index = state.cartItems.findIndex(itemIndex => item.id === itemIndex.id)
        return index !== -1
    }

    return { addToCart, removeToCart, isInCart}
}



export default useCart;

import { createContext, useContext, useEffect, useReducer } from "react";
import { ACTIONS } from "./constants";
import useCart from "../hooks/useCart";

const initialState = {
    cartItems: []
};
const CartContext = createContext({
    ...initialState,
    addToCart: () => { },
    removeToCart: () => { },
    isInCart: () => { }
});

const cartReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART:
            return { ...state, cartItems: action.value.cartItems }
        case ACTIONS.REMOVE_TO_CART:
            return { ...state, cartItems: action.value.cartItems }
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const hookCart = useCart(state, dispatch)

    return <CartContext.Provider value={{ ...state, ...hookCart }}>{children}</CartContext.Provider>
};

export const useCartContext = () => useContext(CartContext)

export default CartProvider;
import { useEffect } from "react";
import { CardItem } from "../../components/CardItem/CardItem"
import { useCartContext } from "../../providers/CartProvider"

export const ItemList = ({ itemList }) => {
    const { cartItems, addToCart, removeToCart, isInCart } = useCartContext();
    useEffect(() => {
        console.log(cartItems)
    }, [cartItems]);

    return (<>
        {
            itemList.map((item) => <CardItem key={"item-" + item.id} item={item} onAddToCart={addToCart} onRemoveToCart={removeToCart} inCart={isInCart(item)}></CardItem>)
        }
    </>)
}
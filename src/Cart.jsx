import { useContext } from 'react';
import { CartContext } from './App';


const Cart = () => {

    const {itemsInCart} = useContext(CartContext)
    if (itemsInCart.length === 0) return <p>Your cart is empty.</p>

    return(
        <>
        The content of the cart will be displayed here.
        </>
    )
}

export default Cart;
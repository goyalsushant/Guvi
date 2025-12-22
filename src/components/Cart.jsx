import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../features/cartSlice"

const Cart = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)

    return (
        <>
            <h2>Cart</h2>
            {
                items.map(item => (
                    <div key={item.id}>
                        <span>
                            <img src={item.image} height={'100px'} width={'100px'}/>
                        </span>
                        <span>{item.title}</span>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                        <button onClick={() => dispatch(addToCart(item))}>+</button>
                        <span>Total Quantity: {item.quantity}</span>
                    </div>
                ))
            }
        </>
    )

}


export default Cart
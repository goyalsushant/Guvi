import { useSelector } from "react-redux"

const Header = () => {

    const totalQuantity = useSelector(
        (state) => state.cart.totalQuantity
    )

    return (

        <h2>

            Cart Items: {totalQuantity}
        </h2>
    )
}

export default Header
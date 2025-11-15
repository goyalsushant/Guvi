const Reduce = () => {

    const cart = [
        { name: 'Shirt', price: 25, quantity: 2 },
        { name: 'Jeans', price: 45, quantity: 2 },
        { name: 'Hat', price: 15, quantity: 1 },
        { name: 'Socks', price: 5, quantity: 4 },
    ]

    const totalPrice = cart.reduce((accumulator, item) => {
        return accumulator + item.price * item.quantity
    }, 0)

    return (
        <>
            Total Price to be paid: {totalPrice}
        </>
    )
}

export default Reduce
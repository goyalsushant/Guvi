import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setLoading, setProducts, setSearch } from "../features/productSlice"
import ProductList from "./ProductList"
import { addToCart } from "../features/cartSlice"

const Products = () => {

    const dispatch = useDispatch()
    const { items, loading, search, count } = useSelector(
        (state) => state.products
    )

    const handleCLick = async () => {
        dispatch(setLoading())
        const data = await axios.get('https://fakestoreapi.com/products')
        dispatch(setProducts(data.data))
    }

    return (
        <>
            <button onClick={handleCLick}>Load Products</button>
            <br />

            {loading && <p>Loading Products...</p>}
            <br />
            <p>Total Products: {count}</p>
            <br />
            <input type="text" value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
            {
                items.map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt="" height={'300px'} width={'200px'} />
                        <h3>{product.title}</h3>
                        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                    </div>
                ))
            }
        </>
    )
}

export default Products
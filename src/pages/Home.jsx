import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setError, setMeals, setSearch } from "../slices/mealSlice"
import MealCard from "../components/MealCard"

const Home = () => {
    const dispatch = useDispatch()

    const { meals, loading, error, search } = useSelector(
        state => state.meals
    )

    useEffect(() => {

        async function callApi() {
            try {
                const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                dispatch(setMeals(data.data.meals || []))
            }
            catch (err) {
                dispatch(setError(err.message))
            }

        }
        callApi()
    }, [dispatch])

    const searchMeals = async () => {
        if (!search) return

        try {
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            dispatch(setMeals(data.data.meals || []))
        }
        catch (err) {
            dispatch(setError(err.message))
        }

    }

    const handleSearch = () => {

    }

    return (
        <div>
            <h2>Search Meals</h2>

            <input type="text" value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
            <button onClick={searchMeals}>Search</button>

            {loading && <p>Loading Data...</p>}
            {error && <p>{error}</p>}

            <div className="grid">
                {console.log(meals)}
                {
                    meals.length > 0 && meals.map(meal => (
                        <MealCard key={meal.id} meal={meal} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
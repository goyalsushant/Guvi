import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { setLoading, setSelectedMeal } from "../slices/mealSlice"

const MealDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { selectedMeal, loading } = useSelector(
        state => state.meals
    )

    useEffect(() => {
        async function callApi() {
            dispatch(setLoading())
            const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            // console.log(data.data)
            dispatch(setSelectedMeal(data.data.meals[0]))
        }

        callApi()
    }, [id, dispatch])

    return (
        <div className="container">
            <Link to={'/'}>Back to Homepage</Link>
            {
                selectedMeal && (
                    <>
                        <h1>{selectedMeal.strMeal}</h1>
                        <img src={selectedMeal.strMealThumb} alt="" />
                        <p><b>Category: </b>{selectedMeal.strCategory}</p>
                        <p><b>Area:</b> {selectedMeal.strArea}</p>
                        <p><b>Instructions:</b> {selectedMeal.strInstructions}</p>
                    </>
                )
            }
        </div>
    )
}

export default MealDetails
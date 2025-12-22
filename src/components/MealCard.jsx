import { Link } from "react-router-dom"

const MealCard = ({meal}) => {
    console.log(meal)
    return (
        <div className="card">
            <img src={meal.strMealThumb} alt="" />
            <h3>{meal.strMeal}</h3>
            <Link to={`/meal/${meal.idMeal}`}>
                <button>View Details</button>
            </Link>
        </div>
    )
}

export default MealCard
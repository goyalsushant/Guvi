import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar">
            <h2>Meal Finder</h2>
            <Link to="/">Home</Link>
        </nav>
    )
}

export default Navbar
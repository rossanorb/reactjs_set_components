import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div>
                    <Link className="navbar-brand" to="/">Dashboard</Link>
                    <Link className="navbar-brand" to="/users">Users</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
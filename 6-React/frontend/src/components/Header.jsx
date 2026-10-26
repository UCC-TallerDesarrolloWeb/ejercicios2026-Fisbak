import { useNavigate } from "react-router-dom";

const Header = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigate = useNavigate();

    const handlelogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    }

    return(
        <header>
            <h1>GYM</h1>
            <nav>
                <a href="/">Home</a>
                {
                    isLoggedIn ? (
                        <button onClick={handlelogout}>Cerrar Sesion</button>
                    ) : (
                        <a href="/login">Login</a>
                    )
                }
                <a href="/activities">Actividades</a>
            </nav>
        </header>
    )
}

export default Header;
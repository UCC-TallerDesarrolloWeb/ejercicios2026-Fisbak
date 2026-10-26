import { useNavigate } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <h1>GYM</h1>
            <nav>
                <a href="/6-React/frontend/public">GYM</a>
                {
                    isLoggedIn ? (
                        <button onClick={handleLogout}>Cerrar Sesion</button>
                        ) : (
                        <a href="/pages/Login">Login</a>
                    )
                }
                <a href="/pages/Activities">Actividades</a>
            </nav>
        </header>
    )
}

export default Header;
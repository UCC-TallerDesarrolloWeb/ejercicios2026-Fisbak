const Header = () => {

    return (
        <header>
            <h1>GYM</h1>
            <nav>
                <a href="/">GYM</a>
                {
                    isLoggedIn ? (
                        <button onClick={handleLogout}>Cerrar Sesion</button>
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
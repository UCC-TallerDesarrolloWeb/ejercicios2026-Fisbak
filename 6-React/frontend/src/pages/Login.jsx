import {useState} from "react";
import "@styles/login.scss"
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [username,setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if(username=="admin"&&password=="admin"){
            console.log("Login OK");
            localStorage.setItem("isLoggedIn","true");
            navigate("/activities");
        }else{
            console.log("Login Failed");
        }
    }

    return (

        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Iniciar Sesion</h2>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    className="login-user"
                    placeholder="User"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    className="login-password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}

export default Login;
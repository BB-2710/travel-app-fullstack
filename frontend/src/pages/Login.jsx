import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            navigate("/");
        } catch (err) {
            alert("Invalid credentials!");
        }
    }
    
    return (
        <div style={{ maxWidth: "400PX", margin: "50px auto", textAlign: "center" }}>
            <h2>Login to WanderLust</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required style={{ width: "100%", padding: "8px", margin: "10px 0" }} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px", margin: "10px 0" }} />
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>Login</button>
            </form>
        </div>
    )
}

export default Login
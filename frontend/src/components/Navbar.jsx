import { useContext } from 'react';
import {Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
    const { token, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/login");
    };
    
    return (
        <nav style={{ padding: "1rem", background: "#1e293b", color: "#fff", display: "flex", justifyContent: "space-between" }}>
            <h2><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>WanderLust</Link></h2>
            <div>
                <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Destinations</Link>
                {token ? (
                    <>
                    <Link to="/itinerary" style={{ color: "#fff", marginRight: "15px" }}>My Itinerary</Link>
                    <button onClick={handleLogout} style={{ padding: "5px 10px", cursor: "pointer" }}>Logout</button>
                    </>
                ) : (
                    <Link to="/login" style={{ color: "#fff" }}>Login</Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar
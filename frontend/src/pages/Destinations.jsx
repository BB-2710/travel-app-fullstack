import { useEffect, useState } from 'react'
import API from "../api";

function Destinations() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        API.get("detinations/")
        .then(res => setDestinations(res.data))
        .catch(err => console.error(err))
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Explore Destinations</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
                {destinations.map(item => (
                    <div key={item.id} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
                        <img src={item.image_url || "http://via.placeholder.com/250"} alt={item.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                        <h3>{item.title}</h3>
                        <p>{item.location}</p>
                        <p><strong>${item.price_per_day}</strong> / day</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Destinations
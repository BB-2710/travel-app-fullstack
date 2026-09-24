import { useEffect, useState } from 'react'
import API from "../api";

function Itineraries() {
    const [itineraries, setItineraries] = useState([])
    const [destinations, setDestinations] = useState([])
    const [form, setForm] = useState({ destination: "", start_date: "", end_date: "", notes: "" })

    useEffect(() => {
        fetchItineraries()
        API.get("destinations/").then(res => setDestinations(res.data))
    }, [])

    const fetchItineraries = () => {
        API.get("itineraries/").then(res => setItineraries(res.data))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await API.post("itineraries/", form)
            alert("Trip added to your itinerary!")
            setForm({ destination: "", start_date: "", end_date: "", notes: ""})
            fetchItineraries()
        } catch (err) {
            alert("Failed to save itinerary")
        }
    }
    
    return (
        <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
            <h2>Create New Travel Plan</h2>
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px", marginBottom: "30px" }}>
                <select value={form.destination} onChange={e => setForm({...form, destination: e.target.value})} required style={{ padding: "8px" }}>
                    <option value="">Select Destination</option>
                    {destinations.mao(d => <option key={d.id} value={d.id}>{d.title}</option>)}
                </select>
                <input type="date" value={form.start_date} onChange={e => setForm({...form, start_date: e.target.value})} required style={{ padding: "8px" }} />
                <input type="date" value={form.end_date} onChange={e => setForm({...form, end_date: e.target.value})} required style={{ padding: "8px" }} />
                <textarea placeholder="Notes (optional)" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} style={{ padding: "8px" }} />
                <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>Add Trip</button>
            </form>

            <h2>My Saved Itineraries</h2>
            {itineraries.map(item => (
                <div key={item.id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px", borderRadius: "8px" }}>
                    <h3>{item.destination_detail?.title} ({item.destination_detail?.location})</h3>
                    <p>🗓️{item.start_date} to {item.end_date}</p>
                    {item.notes && <p>📝{item.notes}</p>}
                </div>
            ))}
        </div>
  )
}

export default Itineraries
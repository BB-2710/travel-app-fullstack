import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Navbar from "./components/Navbar"
import Destinations from "./pages/Destinations"
import Login from "./pages/Login"
import Itineraries from "./pages/Itineraries"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Destinations />} />
          <Route path="/login" element={<Login />} />
          <Route path="/itinerary" element={
            <ProtectedRoute>
              <Itineraries />
            </ProtectedRoute>
          }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App

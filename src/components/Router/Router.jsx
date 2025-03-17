
import { Routes, Route } from "react-router"
import Login from "../../pages/Login/Login"
import Register from "../../pages/Registr/Registr"
import Home from "../../pages/Home/Home"

function Router () {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}

export default Router
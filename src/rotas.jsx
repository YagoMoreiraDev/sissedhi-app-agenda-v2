import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login';
import Appointments from './pages/Appointments/Appointments';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/agendamentos" element={<Appointments />}/>
            </Routes>
        </BrowserRouter>
    )
}
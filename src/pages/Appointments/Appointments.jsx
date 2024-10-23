import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { unidades } from "../../constants/data.js";

import "./style.css";

export default function Appointments() {
    return (
        <div className="container-fluid mt-page">
            <Navbar />
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="d-inline">Agendamentos</h2>
                    <Link to="/agendamentos/add" className="btn btn-outline-primary ms-5 mb-2">
                        Novo Agendamento
                    </Link>
                </div>

                <div className="d-flex justify-content-end">
                    <input id="startDate" className="form-control" type="date" />
                    <span className="m-2">Até</span>
                    <input id="endDate" className="form-control" type="date" />

                    <div className="form-control ms-3 me-3">
                        <select name="solicitacoes" id="solicitacoes">
                            <option value="">Todos os Agendamentos</option>
                            {
                                unidades.map((uni) => {
                                    return <option key={uni.id_unidade} value={uni.id_unidade}>{uni.name}</option>
                                })
                            }
                            
                        </select>
                    </div>

                    <button className="button-filtrar btn btn-primary">Filtrar</button>
                </div>
            </div>
        </div>
        
    )
}
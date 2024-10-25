import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { unidades, agendamentos } from "../../constants/data.js";

import "./style.css";
import Appointment from "../../components/Appointment/Appointment.jsx";
import { useState } from "react";

export default function Appointments() {

    const [statusReuniao, setStatusReuniao] = useState('PENDENTE')

    function clickConfirm() {
        setStatusReuniao('CONFIRMADO')
    }

    function clickEdit() {
        setStatusReuniao("ALTERADO")
    }

    function clickDelete() {
        setStatusReuniao("CANCELADO")
    }

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
            <hr />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" className="col-solicitante">Solicitante</th>
                        <th scope="col" className="col-requerido">Requerido</th>
                        <th scope="col" className="col-assunto">Assunto</th>
                        <th scope="col" className="col-data-hora">Data-Hora</th>
                        <th scope="col" className="col-status">Status</th>
                        <th scope="col" className="col-buttons"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        agendamentos.map((ap) => {
                            return <Appointment
                                key={ap.id_agendamento}
                                id_agendamento={ap.id_agendamento}
                                requerido={ap.solicitacao}
                                assunto={ap.assunto}
                                bookingDate={ap.booking_date}
                                bookingHours={ap.booking_hour}
                                status={ap.status}
                                clickConfirm={clickConfirm}
                                clickEdit={clickEdit}
                                clickDelete={clickDelete}
                            />
                        }
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}
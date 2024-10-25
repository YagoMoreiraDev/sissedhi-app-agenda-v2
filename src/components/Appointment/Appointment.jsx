import "./appointment.css";

import "./appointment.css";

export default function Appointment(props) {

    const dat = new Date(props.bookingDate);

    // Função para determinar a classe de status com base no valor de props.status
    const getStatusClass = () => {
        switch (props.status) {
            case "CONFIRMADO":
                return "status-confirmado";
            case "PENDENTE":
                return "status-pendente";
            case "CANCELADO":
                return "status-cancelado";
            default:
                return "";
        }
    };

    return (
        <tr>
            <td scope="col">{props.id_agendamento}</td>
            <td scope="col">{props.requerido}</td>
            <td scope="col">{props.assunto}</td>
            <td scope="col">{new Intl.DateTimeFormat('pt-BR', {dateStyle: 'short'}).format(dat)}</td>
            <td scope="col" className={`status-text ${getStatusClass()}`}>{props.status}</td>
            <td className="text-end">
                <div className="flex">
                    <button className="btn-app btn btn-sm btn-success" onClick={props.clickConfirm}>
                        <i className="bi bi-check-circle-fill"></i>
                    </button>
                
                    <button className="btn-app btn-delete btn btn-sm btn-danger" onClick={props.clickDelete}>
                        <i className="bi bi-trash3-fill"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
}

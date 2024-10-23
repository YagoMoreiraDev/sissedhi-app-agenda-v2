import "./style.css";

export default function Login() {
    return (
        <div className="body-container">
            <main>
                <section>
                    <div className="container">
                        <div className="img-logo">
                            <img src="./logo-ce-sedih.png" alt="Logo" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Digite seu e-mail"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="**********"
                            />
                        </div>
                        <div className="div-button">
                            <button type="button" className="btn btn-success">
                                Entrar
                            </button>
                            <button type="button" className="btn btn-success">
                                Recuperar Senha
                            </button>
                        </div>
                        <div className="sign-up-message">
                            <span>Não tenho conta. </span>
                            <a href="http://suporte.direitoshumanos.ce.gov.br/" target="_blank" className="link-create-account">Criar conta agora.</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

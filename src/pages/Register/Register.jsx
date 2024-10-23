import { useState } from 'react';
import './style.css';

export default function Register() {
    // Estado para os campos do formulário
    const [senha, setSenha] = useState('dh@2024');

    return (
        <div className="body-container">
            <main>
                <section>
                    <div className="container">
                        <div className="form-header">
                            <div className="img-logo">
                                <img src="./logo-ce-sedih.png" alt="Logo" />
                            </div>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">CPF</label>
                                    <input type="text" className="form-control" placeholder="CPF" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Nome Completo</label>
                                    <input type="text" className="form-control" placeholder="Nome completo" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">E-mail</label>
                                    <input type="email" className="form-control" placeholder="E-mail" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Setor</label>
                                    <input type="text" className="form-control" placeholder="Setor" required />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">Senha</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">Cadastrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

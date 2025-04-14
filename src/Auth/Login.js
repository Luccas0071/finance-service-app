import { Link } from "react-router-dom"
import './Login.css'

import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('Teste', email, password);
        console.log('Enviar');
    }


    return (
        <main className="container">
            <form onSubmit={handleSubmit}>
                <div className="login">
                    <h2>JuntaGrana</h2>

                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <img src="/svg/envelope.svg" width={16} height={16} alt="email icon" />
                        </span>
                        <input type="text" className="form-control" placeholder="E-mail" onChange={(e) => setEmail(e.target.value) }/>
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <img src="/svg/lock.svg" width={16} height={16} alt="senha icon" />
                        </span>
                        <input type="password" className="form-control" placeholder="Senha" onChange={(e) => setPassword(e.target.value) }/>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" >Login</button>
                    </div>

                    <Link to="/register">Criar conta</Link>
                </div>
            </form>
        </main>
    )
}

export default Login
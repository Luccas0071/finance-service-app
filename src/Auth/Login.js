import { Link } from "react-router-dom"
import './Login.css'

import { useState } from "react"
import axios from "axios"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = async (event) => {
        if (!email || !password) {
            return alert("Preencha email e senha.");
        }
        event.preventDefault();

        try {
            const response = await axios.post(
                process.env.REACT_APP_FINANCE_SERVICE_API_HOST + '/v1/auth/login'
                , 
                {
                    email,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }
            );

            const result = response.data
            localStorage.setItem('token', result.token);
            window.location.href = "/home";
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message || "Erro ao fazer login.");
            } else if (error.request) {
                alert("Sem resposta do servidor.");
            } else {
                alert("Erro inesperado.");
            }
            console.error(error);
        }
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